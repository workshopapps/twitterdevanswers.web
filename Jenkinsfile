pipeline { 
    agent any 
    options {
            skipStagesAfterUnstable()
        }
    stages {
        stage('Build') { 
            steps { 
                sh 'npm i'
              }
        }

        stage('Deploy to Production') {
            input{
                message "Click OK! to deploy to Production?"
                ok "OK"
            }
            steps {
                sh 'ssh -o StrictHostKeyChecking=no abell205@65.108.237.42 "\
                cd frontend ;\
                git pull origin dev; \
                npm run build;\
                pm2 serve build 2201;\
                sudo systemctl reload nginx "'
            }
        }
    }
}
