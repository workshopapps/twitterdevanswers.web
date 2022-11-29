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
        stage('Test'){
            steps {
               sh 'npm run build'
            }
        }

        stage('Deploy to Production') {
            input{
                message "Click OK! to deploy to Production?"
                ok "OK"
            }
            steps {
                sh 'ssh -o StrictHostKeyChecking=no deployment-user@52.203.249.167 "\
                cd ;\
                cd project/frontend;\
                git pull origin dev; \
                npm run build;\
                cd ..;\
                sudo cp -r project/frontend/build /var/www/;\
                sudo systemctl reload nginx "'
            }
        }
    }
}
