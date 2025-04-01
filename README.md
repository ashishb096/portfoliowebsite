# React Portfolio Website

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![AWS](https://img.shields.io/badge/AWS-Deployed-orange)

## 🚀 Overview
This is a personal portfolio website built using **React.js** to showcase my skills, projects, and experience in DevOps and cloud technologies. The website is containerized with **Docker** and deployed on **AWS** using a load balancer.

🔗 **Live Website**: [Portfolio Website](http://react-app-lb-1553277615.ap-south-1.elb.amazonaws.com:3000/about)

📂 **GitHub Repository**: [PortfolioWebsite Repo](https://github.com/ashishb096/portfoliowebsite)

---
## 🛠 Tech Stack
- **Frontend**: React.js, HTML, CSS, JavaScript
- **Containerization**: Docker
- **Deployment**: AWS (Elastic Load Balancer, EC2, VPC, ECR, IAM)
- **CI/CD**: GitHub Actions (planned)
- **Version Control**: Git & GitHub

---
## 📌 Features
- Responsive design
- Showcases skills, projects, and experience
- Hosted on AWS using a Load Balancer
- Dockerized for easy deployment
- CI/CD pipeline setup in progress

---
## 🏗 Setup Instructions
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- Docker
- Git

### Steps to Run Locally
```sh
# Clone the repository
git clone https://github.com/ashishb096/portfoliowebsite.git
cd portfoliowebsite

# Install dependencies
npm install

# Start the development server
npm start
```

### Run Using Docker
```sh
# Build Docker image
docker build -t portfolio-app .

# Run Docker container
docker run -p 3000:3000 portfolio-app
```

---
## 🚀 Deployment on AWS
The app is deployed on AWS using the following steps:
1. **Dockerized** the React app.
2. Pushed the Docker image to **Amazon Elastic Container Registry (ECR)**.
3. Deployed the container on **Amazon EC2** with an **Elastic Load Balancer (ELB)**.
4. Configured **security groups** and **IAM roles** for secure access.

More details on the AWS setup can be found in the repository's **Deployment Guide**.

---
## 🤝 Contributing
If you’d like to contribute, fork the repo and submit a pull request!

1. **Fork** the repo
2. **Create** a new branch: `git checkout -b feature-branch`
3. **Commit** changes: `git commit -m 'Add new feature'`
4. **Push** to branch: `git push origin feature-branch`
5. **Submit** a pull request

---
## 📬 Contact
Feel free to reach out via:
- GitHub: [@ashishb096](https://github.com/ashishb096)
- LinkedIn: [Your LinkedIn Profile](#)

---
### 🔥 Show Some Love
If you like this project, don’t forget to ⭐ the repository!
