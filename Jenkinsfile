pipeline { 
    agent any 
    options {
            skipStagesAfterUnstable()
        }
    stages {
        stage('Pull repo') {
            steps { 
                
                sh "rm -rf ${WORKSPACE}/twitterdevanswers.web"
                sh "git clone https://github.com/workshopapps/twitterdevanswers.web.git"
                
        stage('Build') { 
            steps { 
                dir('twitterdevanswers.web')
                sh "npm i --force && CI=false npm run build"
              }
        }

        stage('Deploy to Production') {
            steps {
                    sh "sudo cp -r ${WORKSPACE}/twitterdevanswers.web /home/judgejudy"
                    sh "sudo su - judgejudy && whoami"
                    //sh "sudo pm2 stop devaskweb"
                    sh "sudo systemctl restart twitterdevanswers.web.service"
                    sh "sudo pm2 save"
            }
        }
    }
}
}
}
