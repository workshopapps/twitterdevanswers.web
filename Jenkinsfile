pipeline { 
    agent any 
    stages {
        stage('Build') { 
            steps { 
                sh "npm i"
                sh "CI=false npm run build"
              }
        }
        stage('Deploy Frontend'){
            steps{
                sh "npm start&"
                sh "systemctl restart devask-frontend.service"
            }
        }

        stage('Deploy to Production') {
            steps {
                    sh "sudo cp -fr ${WORKSPACE}/build/* /var/www/devask.hng.tech/html"
            }
        }
    }
    
    post{
		// This sends an email, should there be any error in the build
        failure{
            emailext attachLog: true, 
            to: 'gideonbusayo@gmail.com',
            subject: '${BUILD_TAG} Build failed',
            body: '${BUILD_TAG} Build Failed \nMore Info can be found here: ${BUILD_URL} or in the log file below'
        }
    }
}
