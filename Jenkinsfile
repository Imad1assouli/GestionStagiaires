pipeline {
    agent any
    
    environment {
        BACKEND_IMAGE = "imad1assouli/my-backend-repo:${env.BUILD_ID}"
        FRONTEND_IMAGE = "imad1assouli/my-frontend-repo:${env.BUILD_ID}"
        REGISTRY_CREDENTIALS = 'docker-hub-credentials'
        REGISTRY_URL = 'https://hub.docker.com/'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Imad1assouli/GestionStagiaires.git', branch: 'main'
            }
        }
        
        stage('Build Backend') {
            steps {
                script {
                    dir('backend') {
                        sh './mvnw clean package -DskipTests'
                    }
                }
            }
        }
        
        stage('Build Frontend') {
            steps {
                script {
                    dir('frontend') {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }
        
        stage('Test Backend') {
            steps {
                script {
                    dir('backend') {
                        sh './mvnw test'
                    }
                }
            }
        }
        
        stage('Test Frontend') {
            steps {
                script {
                    dir('frontend') {
                        sh 'npm test'
                    }
                }
            }
        }
        
        stage('Build Docker Images') {
            steps {
                script {
                    dir('backend') {
                        sh "docker build -t ${BACKEND_IMAGE} ."
                    }
                    dir('frontend') {
                        sh "docker build -t ${FRONTEND_IMAGE} ."
                    }
                }
            }
        }
        
        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry(REGISTRY_URL, REGISTRY_CREDENTIALS) {
                        sh "docker push ${BACKEND_IMAGE}"
                        sh "docker push ${FRONTEND_IMAGE}"
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh "docker run -d -p 8080:8080 ${BACKEND_IMAGE}"
                    sh "docker run -d -p 4200:80 ${FRONTEND_IMAGE}"
                }
            }
        }
    }
    
    post {
        always {
            sh 'docker system prune -f'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
