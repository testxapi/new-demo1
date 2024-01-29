//---------------------Popup-----------------------------
const open = document.getElementById("btn-open");
const close = document.getElementById("btn-close");

const modal_container = document.getElementById("modal-container");
const modal_demo = document.getElementById("modal-demo");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});
close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

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

function sendXAPIStatement(
  verbId,
  verb,
  objectId,
  object,
  desc,
  question,
  answer
) {
  const xapiStatement = {
    actor: {
      objectType: "Agent",
      account: {
        homePage: "https://example.platform.jp",
        name: "test001",
      },
    },
    verb: {
      id: verbId,
      display: { "en-us": verb },
    },
    object: {
      id: objectId,
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
                "en-us": "英語アニメーション",
                "ja-jp": "英語アニメーション",
              },
            },
          },
        ],
      },
      extensions: {
        "https://demo.flak.works/self_checks/save": {
          user_id: 4,
          category_id: 34,
          assessment_item_id: question,
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

//---------------------Chart-----------------------------

var radio1 = 3;
var radio2 = 4;
var radio3 = 4;

const q1 = document.getElementsByClassName("q1")[0].innerHTML;
const q2 = document.getElementsByClassName("q2")[0].innerHTML;
const q3 = document.getElementsByClassName("q3")[0].innerHTML;

const ques1 = document.getElementsByName("radio1")[0].className;
const ques2 = document.getElementsByName("radio2")[0].className;
const ques3 = document.getElementsByName("radio3")[0].className;

var data = {
  labels: ["①", "②", "③"],
  datasets: [
    {
      label: "自己評価チャート",
      backgroundColor: "RGBA(60,154,193, 0.3)",
      borderColor: "RGBA(54,154,196, 1)",
      pointBackgroundColor: "RGB(54,154,196)",
      borderWidth: 2,
      data: [radio1, radio2, radio3],
      min: 0,
      max: 5,
      stepSize: 1,
    },
  ],
};
const ctx = document.getElementById("myChart");

var chart = new Chart(ctx, {
  type: "radar",
  data: data,
  options: {
    scale: {
      r: {
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  },
});

$(document).on("change", "input[type=radio]", function () {
  var radio11 = $('[name="radio1"]:checked').val();
  var radio22 = $('[name="radio2"]:checked').val();
  var radio33 = $('[name="radio3"]:checked').val();

  var desc = "";
  var object = 0;
  var question = 0;

  if (radio1 != radio11) {
    desc = q1;
    question = ques1;
    object = radio11;
  } else if (radio2 != radio22) {
    desc = q2;
    question = ques2;
    object = radio22;
  } else {
    desc = q3;
    question = ques3;
    object = radio33;
  }

  radio1 = radio11;
  radio2 = radio22;
  radio3 = radio33;

  const verbId = "http://adlnet.gov/expapi/verbs/answered";
  const objectId = "http://adlnet.gov/expapi/activities/question";

  sendXAPIStatement(
    verbId,
    "answered",
    objectId,
    desc,
    object,
    question,
    object
  );

  data = {
    labels: ["①", "②", "③"],
    datasets: [
      {
        label: "自己評価チャート",
        backgroundColor: "RGBA(60,154,193, 0.3)",
        borderColor: "RGBA(54,154,196, 1)",
        pointBackgroundColor: "RGB(54,154,196)",
        borderWidth: 2,
        data: [radio1, radio2, radio3],
        min: 0,
        max: 5,
        stepSize: 1,
      },
    ],
  };

  chart.destroy();

  chart = new Chart(ctx, {
    type: "radar",
    data: data,
    options: {
      scale: {
        r: {
          min: 0,
          max: 5,
          stepSize: 1,
        },
      },
    },
  });

  chart.render();
});
