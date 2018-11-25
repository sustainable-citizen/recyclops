```
 _______  _______  _______           _______  _        _______  _______  _______
(  ____ )(  ____ \(  ____ \|\     /|(  ____ \( \      (  ___  )(  ____ )(  ____ \
| (    )|| (    \/| (    \/( \   / )| (    \/| (      | (   ) || (    )|| (    \/
| (____)|| (__    | |       \ (_) / | |      | |      | |   | || (____)|| (_____
|     __)|  __)   | |        \   /  | |      | |      | |   | ||  _____)(_____  )
| (\ (   | (      | |         ) (   | |      | |      | |   | || (            ) |
| ) \ \__| (____/\| (____/\   | |   | (____/\| (____/\| (___) || )      /\____) |
|/   \__/(_______/(_______/   \_/   (_______/(_______/(_______)|/       \_______)
```
- [About](#about)
- [Getting Started With Ember](#getting-started-with-ember)
- [Development](#development)

# About
Recyclops is the front end web application for the sustainable citizen project.
It is written in [Ember](https://www.emberjs.com/)

# Getting Started With Ember
If you are new to Ember, check out the amazing [Ember Guides](https://guides.emberjs.com/release/) which will walk you through the setup of Ember

# Development
### Clone the Repo
*NOTE: If you have not linked your github account with an SSH key on your local machine, you will need to do so in order to clone via SSH. The steps to do this can be found [here](https://help.github.com/articles/connecting-to-github-with-ssh/)*

I suggest creating a folder where all your github repositories will live, and one inside that folder, enter the following command to clone the this project:
```
git clone git@github.com:AnthonyRobertson17/recyclops.git
```

### Running the app
Once you have cloned the project, you can run the following command from within the project to run the app:
```
ember serve
```
You will see some output letting you know which URL to enter in order to access the app. It will most likely be `localhost:4200`

### Using the app
As of now, the app is capable of secure login via oauth2. Signup is unavailable. Therfore, use requires an existing account.

Once logged in, the app enables its user to add,modify,and delete challenges associated with Sustainable Citizen's "challenges" features.
