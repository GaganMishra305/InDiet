## Getting Started

Create a project using this example:

```bash
npx thirdweb create --template next-typescript-starter
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

On `pages/_app.tsx`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.

## Environment Variables

To run this project, you will need to add environment variables. Check the `.env.example` file for all the environment variables required and add it to `.env.local` file or set them up on your hosting provider.

## Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Templates](https://thirdweb.com/templates)

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## About InDiet

InDiet is a platform to solve the Obesity Problems faced Accross the World. InDiet uses a fun, interactive and gamified platform to reduce obesity and create awareness about Nutritional Intake necessary for the Human Body.

## Procedure

1> The User captures a pic of their Meal and uploads the picture onto the Website where a Model identifies their meal and assigns a food score. After getting this food score, the user can compete among a set of other users worldwide, the User with the highest food score for a set of time period wins the Challenge and takes home the Trophy. The User can win some NFT and trade it for cryptocurrency that is directly added to the user's metamask address.

2> The Other part of this process is thay the user can trade Non Fungible Tokens(NFT's) of various Fruits and Vegetables. The NFT's are segregated into Common and Premium NFT's

3> The Premium Feature, Personalized Diet Plans, uses a Regression Model that will give you the Best Diet Plan for upcoming week depending upon the amount of calories, proteins you need to consume based upon your dietary conditions.

## Model Explained

1> Food Detection Model:
    --> Dataset Used: Food 101
        Found on Kaggle
        Contains 25000 images distributed accross 101 Classes.
        Link for the dataset: https://www.kaggle.com/datasets/dansbecker/food-101

    --> The Model is trained using CNN.

2> Diet Plan Model: 
    --> Dataset Used: Nutrition Dataset
    --> Model is Trained using Pulp to Give Diet for the entire week based on the amount of Carbs, Proteins, etc the user wants to consume.


