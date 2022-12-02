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
                    sh "sudo cp -fr ${WORKSPACE}/build/* /home/judgejudy/twitterdevanswers.web/"
                    sh "sudo su - judgejudy && whoami"
                   // sh "sudo pm2 stop devaskweb"
                    sh "sudo pm2 serve /home/judgejudy/twitterdevanswers.web/build -f --port 4456 --name devaskweb"
                    sh "sudo pm2 save"
            }
        }
    }
}
