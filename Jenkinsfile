pipeline { 
    agent any 
    stages {
        stage('Build') { 
            steps { 
                sh "npm i"
                sh "CI=false npm run build"
                sh "npm start&"
              }
        }

        stage('Deploy to Production') {
            steps {
                    sh "sudo cp -fr ${WORKSPACE}/build/* /var/www/devask.hng.tech/html"
            }
        }
    }
}
