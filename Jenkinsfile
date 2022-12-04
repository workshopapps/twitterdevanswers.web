pipeline {

	agent any
	stages {

        stage("Get repo"){

			steps {
				sh "rm -rf ${WORKSPACE}/twitterdevanswer.web"
				sh "git clone https://github.com/workshopapps/twitterdevanswers.web.git"
				
			}

		}

		stage("build frontend"){

			steps {

				dir('twitterdevanswers.web') {
                    sh "npm install"
                    sh "CI=false npm run build"
            }

			}
        }

		stage("deploy") {
		
			steps {
				sh "sudo cp -r ${WORKSPACE}/twitterdevanswers.web /home/judgejudy/"
				sh "sudo systemctl restart twitterdevanswers.web.service"
            }
			
	    }
	}
}
