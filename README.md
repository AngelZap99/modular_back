# modular_back

## INDEX
[Intructions](Instructions)


## Instructions

 * ### First time
1. The first step is to install all project dependencies with the command: (You have to be in the source path of the project)
~~~
  Yarn
~~~
2. Declare the environment variables, create a file called ```.env``` and use the example in the ```.env.example``` file
#### Docker  
3. You must have docker desktop installed and running, To run the comand:
~~~
  docker-compose up -d
~~~
#### Prisma
4. When the docker container is running, the next step is to initialize the database and create all the tables, for this it is necessary to execute the next commands
~~~
  npx prisma db push
  npx prisma db seed
~~~
>  _The first one, creates the entire structure of the database and creates a schema called public which is where it will work, and the second one injects all the necessary information to start working in the database_ 

---

 * ### Execute project
#### Comands:
~~~
  yarn dev
~~~
