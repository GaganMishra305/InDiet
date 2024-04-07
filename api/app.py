# app.py
from flask import Flask
from flask import Flask, request, jsonify, abort
from werkzeug.exceptions import BadRequest
from flask_cors import CORS, cross_origin
from decimal import Decimal

import warnings
warnings.filterwarnings('ignore')

from utils import food_recognition_function, diet_planning_function, read_csv, write_to_csv, clear_csv

app = Flask(__name__)

CORS(app,origins=['*'], CORS_ORIGINS=["*"])

@app.after_request
def after_request(response):
    # response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    # response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    # response.headers.add('Access-Control-Allow-Methods', 'POST')
    # response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

# Handle preflight requests
@app.route('/', methods=['OPTIONS'])
def options():
    response = jsonify({'message': 'CORS preflight request successful'})
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    return response


@app.route('/', methods=['GET'])
def index():
    return jsonify("welcome to indiet")

@app.route('/recognize_food', methods=['POST'])
@cross_origin()
def recognize_food():
    if request.method == 'POST':
        image_file = request.files['image']
        data = food_recognition_function(image_file)
        return (data)

@app.route('/plan_diet', methods=['POST'])
def plan_diet():
    if request.method == 'POST':
        data = request.get_json()
        # print(data)
        weight = data['weight']
        target_calories = data['target_calories']
        diet_plan = diet_planning_function(weight, target_calories)
        return jsonify({'diet_plan': diet_plan})

@app.route('/add_weekly_data', methods=['POST'])
def add_weekly_data():
    data = request.json
    address = data.get('address')
    token = Decimal(data.get('token', '0')) # Convert token to Decimal
    if not address or not token:
        return jsonify({'error': 'Address and token are required.'}), 400
    
    write_to_csv(address, token, 'data/weekly_contest.csv')
    return jsonify({'message': 'Data added successfully.'}), 200

@app.route('/clear_weekly_data', methods=['GET'])
def clear_data():
    clear_csv("data/weekly_contest.csv")
    return jsonify({'message': 'Data cleared successfully.'}), 200

@app.route('/get_weekly_data', methods=['GET'])
def get_data():
    data = read_csv("data/weekly_contest.csv")
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(debug=True, port=4000)
