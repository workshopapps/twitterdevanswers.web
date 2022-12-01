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
            steps {
                    sh "sudo cp -fr ${WORKSPACE}/build/* /home/judgejudy/addictionsupportroom.web/frontend"
                    sh "sudo su - judgejudy && whoami"
                    //sh "sudo pm2 stop soberpal"
                    //sh "sudo pm2 stop server"
                    sh "sudo pm2 serve -f /home/judgejudy/twitterdevanswers.web/build --port 4456"
            }
        }
    }
}
