const Json = {
    "logoPosition": "right",
    "completedHtml": "<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>",
    "completedHtmlOnCondition": [
     {
      "html": "<h3>Thank you for your feedback.</h3><h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
     },
     {
      "html": "<h3>Thank you for your feedback.</h3><h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br />"
     }
    ],
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "dropdown",
        "name": "question1",
        "title": "Please insert your gender :",
        "isRequired": true,
        "choices": [
         "Male",
         {
          "value": "item2",
          "text": "Female"
         }
        ]
       },
       {
        "type": "text",
        "name": "question2",
        "title": "Please Insert your height in centimeters (cm) : ",
        "isRequired": true,
        "requiredErrorText": "Please insert a valid value",
        "validators": [
         {
          "type": "numeric",
          "minValue": 0,
          "maxValue": 300
         }
        ],
        "inputType": "number",
        "size": 0,
        "min": 0,
        "max": 300
       },
       {
        "type": "text",
        "name": "question3",
        "title": "Please Insert your weight in kilograms (kg) : ",
        "isRequired": true,
        "inputType": "number",
        "min": 0,
        "max": 397
       },
       {
        "type": "text",
        "name": "question4",
        "title": "Please Insert your BMI Value : ",
        "isRequired": true,
        "validators": [
         {
          "type": "numeric",
          "minValue": 0
         }
        ]
       },
       {
        "type": "text",
        "name": "question5",
        "title": "Please insert the Waist Circumference :",
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "text",
        "name": "question6",
        "title": "Please insert the Hip Circumference :",
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "text",
        "name": "question7",
        "title": "Please enter your Systolic Blood Pressure value :",
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "text",
        "name": "question8",
        "title": "Please enter your Diastolic Blood Pressure value :",
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "dropdown",
        "name": "question9",
        "title": "Do you have Diyabetes Mellitus :",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "question10",
        "title": "Do you have Hypertension :",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "dropdown",
        "name": "question11",
        "title": "Do you have Cholesterol :",
        "isRequired": true,
        "choices": [
         "Yes",
         "No"
        ]
       },
       {
        "type": "dropdown",
        "name": "question12",
        "title": "Are you smoking :",
        "isRequired": true,
        "choices": [
         "Never Smoked",
         "Left Smoking",
         "Smoking"
        ]
       },
       {
        "type": "text",
        "name": "question13",
        "title": "Please insert your glucose level :",
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "dropdown",
        "name": "question14",
        "title": "Are you Insulin resistant :",
        "isRequired": true,
        "choices": [
         "Yes",
         {
          "value": "Yes",
          "text": "No"
         }
        ]
       }
      ]
     }
    ],
    "showQuestionNumbers": "off"
   }

export default Json;
