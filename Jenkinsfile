pipeline { 
    agent any 
    options {
            skipStagesAfterUnstable()
        }
    stages {
        stage('Build') { 
            steps { 
                sh 'npm i'
                sh 'npm run'
                
            }
        }
        stage('Test'){
            steps {
                sh 'echo Test stage'
            }
        }

        stage('Deploy to Production') {
            input{
                message "Click OK! to deploy to Production?"
                ok "OK"
            }
            steps {
                sh 'ssh -o StrictHostKeyChecking=no deployment-user@52.203.249.167 "
                cd devask;\
                cd frontend;\
                git pull origin dev; \
                cd ..;\
                docker compose down --remove-orphans;\
                docker compose up
                "'
            }
        }
    }
}
