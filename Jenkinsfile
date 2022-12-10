pipeline { 
    agent any 
    stages {
        stage('Build') { 
            steps { 
                sh "npm i --force"
                sh "npm install --save @sentry/react @sentry/tracing"
             //   sh "npm install --save atatus-js"
                sh "CI=false npm run build"
              }
        }

        stage('Deploy to Production') {
            steps {
                    sh "sudo cp -fr ${WORKSPACE}/build/* /var/www/devask.hng.tech/ola/html"
                //  sh "sudo su - judgejudy && whoami"
               //   sh "sudo pm2 stop devaskweb"
              //    sh "sudo pm2 serve /home/judgejudy/twitterdevanswers.web/build -f --port 4456 --name devaskweb"
             //     sh "sudo pm2 save"
            }
        }
    }
}
