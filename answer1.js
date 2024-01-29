//--------------XAPI------------------------
// Create LRS connection
const endpoint = "https://testxapi123.lrs.io/xapi/"; // LRS url
const username = "testxapi"; // LRS username
const password = "testxapi"; // LRS password
const auth = XAPI.toBasicAuth(username, password);
const xapi = new XAPI({
  endpoint: endpoint,
  auth: auth,
});

function getLabel(forText) {
  var labels = document.getElementsByTagName("LABEL");
  for (var i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor != "") {
      var elem = document.getElementById(labels[i].htmlFor);
      if (elem) elem.label = labels[i];
    }
  }
}

function sendXAPIStatement(object, desc, answer) {
  const xapiStatement = {
    actor: {
      objectType: "Agent",
      account: {
        homePage: "https://example.platform.jp",
        name: "test001",
      },
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/answered",
      display: { "en-us": "answered" },
    },
    object: {
      id: "http://adlnet.gov/expapi/activities/question",
      definition: {
        name: {
          "en-us": object,
          "ja-jp": object,
        },
        description: {
          "en-us": desc,
        },
      },
    },
    context: {
      contextActivities: {
        category: [
          {
            id: "https://w3id.org/xapi/adl/v1.0",
            definition: {
              type: "https://w3id.org/xapi/video/activity-type/video",
            },
          },
        ],
        parent: [
          {
            id: "https://demo.flak.works/categories/34/videos",
            definition: {
              name: {
                "en-US": "Jim Goes Fishing",
              },
            },
          },
        ],
      },
      extensions: {
        "https://demo.flak.works/checksheet_answers/draft": {
          user_id: 4,
          video_id: 14,
          answer: answer,
        },
      },
    },
    result: {
      success: true,
    },
  };

  console.log("req: ", xapiStatement);

  // Send your statement
  xapi.sendStatement({
    statement: xapiStatement,
  });
}

var ans1 = 0;
var ans2 = 0;
var ans3 = 0;
var ans4 = 0;

const q1 = document.getElementsByClassName("first-half")[0].innerHTML;
const q2 = document.getElementsByClassName("first-half")[1].innerHTML;
const q3 = document.getElementsByClassName("first-half")[2].innerHTML;
const q4 = document.getElementsByClassName("first-half")[3].innerHTML;

// Get answer
$(document).on("change", "input[type=radio]", function () {
  var ans11 = $('[name="answer[radio0]"]:checked')[0];
  var ans22 = $('[name="answer[radio1]"]:checked')[0];
  var ans33 = $('[name="answer[radio2]"]:checked')[0];
  var ans44 = $('[name="answer[radio3]"]:checked')[0];

  if (typeof ans11 != "undefined" && ans11.value != ans1) {
    sendXAPIStatement(
      q1,
      $("label[for='" + ans11.id + "']").text(),
      ans11.value
    );
    ans1 = ans11.value;
  } else if (typeof ans22 != "undefined" && ans22.value != ans2) {
    sendXAPIStatement(
      q2,
      $("label[for='" + ans22.id + "']").text(),
      ans22.value
    );
    ans2 = ans22.value;
  } else if (typeof ans33 != "undefined" && ans33.value != ans3) {
    sendXAPIStatement(
      q3,
      $("label[for='" + ans33.id + "']").text(),
      ans33.value
    );
    ans3 = ans33.value;
  } else if (typeof ans44 != "undefined" && ans44.value != ans4) {
    sendXAPIStatement(
      q4,
      $("label[for='" + ans44.id + "']").text(),
      ans44.value
    );
    ans4 = ans44.value;
  }
});
