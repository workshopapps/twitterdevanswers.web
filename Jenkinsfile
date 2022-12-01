pipeline { 
    agent any 
    options {
            skipStagesAfterUnstable()
        }
    stages {
        stage('Build') { 
            steps { 
                sh "npm i --force && CI=false npm run build"
              }
        }

        stage('Deploy to Production') {
            input{
                message "Click OK! to deploy to Production?"
                ok "OK"
            }
            steps {
                    sh "sudo cp -rf frontend /home/judgejudy/twitterdevanswers.web/backend"
                    sh "sudo cp -fr ${WORKSPACE}/frontend/build/* /home/judgejudy/addictionsupportroom.web/frontend"
                    sh "sudo su - judgejudy && whoami"
                    //sh "sudo pm2 stop soberpal"
                    //sh "sudo pm2 stop server"
                    sh "sudo pm2 serve /home/judgejudy/frontend/build --port 3344"
                    sh "sudo pm2 start /home/judgejudy/backend/app/server.py --interpreter python3"
            }
        }
    }
}
