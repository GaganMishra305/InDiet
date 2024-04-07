import csv
from tensorflow.keras.utils import load_img,img_to_array
from PIL import Image
import pandas as pd

from constants import values,calories,s,model
from recommendation import diet_reccomend

def food_recognition_function(image_file):
    ## preprocessing
    img = Image.open(image_file)
    img = img.resize((224,224))
    img = img_to_array(img)
    img = img/255
    img = img.reshape(1, 224,224,3)

    ## prediction
    p1 = (model.predict(img)).argmax()
    print("Class ",p1,": ",values[p1],sep='')
    print(calories[p1],'\nNote:',s)
    # return {'samosa',100}
    return values[p1]
    

def diet_planning_function(weight, target_calories):
    return diet_reccomend(weight,target_calories)


def write_to_csv(address, token , fname):
    df = pd.DataFrame({'Address': [address], 'Token': [token]})
    try:
        # Load existing CSV if it exists
        existing_df = pd.read_csv(fname)
        # Append new data
        df = pd.concat([existing_df, df], ignore_index=True)
    except FileNotFoundError:
        pass
    # Sort dataframe by Token
    df = df.sort_values(by='Token')
    # Write to CSV
    df.to_csv(fname , index=False)
    
def clear_csv(fname):
    try:
        # Read the first line of the CSV file
        with open(fname, 'r') as f:
            first_line = f.readline().strip()
        # Write the first line back to the CSV file
        with open(fname, 'w') as f:
            f.write(first_line + '\n')
    except FileNotFoundError:
        pass
    
def read_csv(fname):
    data = []
    try:
        with open(fname, 'r') as f:
            csv_reader = csv.DictReader(f)
            for row in csv_reader:
                data.append(row)
    except FileNotFoundError:
        pass
    return data