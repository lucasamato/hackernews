//import groovy.json.JsonOutput

//def COLOR_MAP = [
  //  'SUCCESS': 'good', 
  //  'FAILURE': 'danger',
//]

//def getBuildUser() {
    //return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
//}


pipeline {
    //The agent section specifies where the entire Pipeline, or a specific stage, 
    //will execute in the Jenkins environment depending on where the agent section is placed.
  agent {
           // this image provides everything needed to run Cypress
              docker {image 'cypress/base:10'}
          }  
    //The environment directive specifies a sequence of key-value pairs which will be defined
    //as environment variables for all steps, or stage-specific steps, depending on where the environment directive is located within the Pipeline.
    //environment {
    //    BUILD_USER = ''
 //   }
    
    //The parameters directive provides a list of parameters that a user should provide when triggering the Pipeline.
    //The values for these user-specified parameters are made available to Pipeline steps via the params object, see
    //the Parameters, Declarative Pipeline for its specific usage.
    //parameters {
        //string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'Ej: cypress/integration/pom/*.spec.js')
       //choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
     //   choice(name: 'AMBIENTE', choices: ['QA', 'SANDBOX', 'PROD'], description: 'Selecione o ambiente')

    //}
    
    //The options directive allows configuring Pipeline-specific options from within the Pipeline itself.
    //Pipeline provides a number of these options, such as buildDiscarder, but they may also be provided by
    //plugins, such as timestamps. Ex: retry on failure
    //options {
      //  ansiColor('xterm')
    //}

    //The stage directive goes in the stages section and should contain a steps section, an optional agent section, 
    //or other stage-specific directives. Practically speaking, all of the real work done by a Pipeline will be wrapped
    //in one or more stage directives.
    stages {
        
       stage('Build'){
          //The steps section defines a series of one or more steps to be executed in a given stage directive.
          steps {
              echo "Building the application"
         }
    }
        
        stage('Run end-to-end tests 🧪') {
          
          steps {
               // sh "npm install -D"
                sh "npm ci"
                sh "npm run e2e:ci"
              
            }
        }
      
          stage('RFC') {
          
          steps {
                echo "RFC"
            }
        }
        
        stage('Deploy em PROD'){
            steps {
                echo "Deploying"
            }
        }
    }

    post {
        always {
            //The script step takes a block of Scripted Pipeline and executes that in the Declarative Pipeline. 
            //For most use-cases, the script step should be unnecessary in Declarative Pipelines, but it can provide
            //a useful "escape hatch." script blocks of non-trivial size and/or complexity should be moved into Shared Libraries instead.
           // script {
                //BUILD_USER = getBuildUser()
            //}
            
            //slackSend channel: '#jenkins-example',
               // color: COLOR_MAP[currentBuild.currentResult],
                //message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n Tests:${SPEC} executed at ${BROWSER} \n More info at: ${env.BUILD_URL}HTML_20Report/"
            
            //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML_20Report', reportTitles: ''])
          //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'HTML_Report', reportTitles: ''])  
        // publishHTML (target : [allowMissing: false,
         //  alwaysLinkToLastBuild: true,
         //  keepAll: true,
         //  reportDir: 'cypress/reports',
         //  reportFiles: 'index.html',
        //   reportName: 'My Reports',
       //reportTitles: 'The Report'])
        }
    }
}
