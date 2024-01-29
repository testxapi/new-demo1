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

function videoInit(desc) {
  const xapiStatement = {
    actor: {
      objectType: "Agent",
      account: {
        homePage: "https://example.platform.jp",
        name: "test001",
      },
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/initialized",
      display: { "en-us": "initialized" },
    },
    object: {
      id: "https://demo.flak.works/video?video_id=14",
      objectType: "Activity",
      definition: {
        type: "https://w3id.org/xapi/video/activity-type/video",
        name: { "en-us": "Jim Goes Fishing" },
        description: {
          "en-us": desc,
          "ja-jp": desc,
        },
      },
    },
    context: {
      contextActivities: {
        category: [
          {
            id: "https://w3id.org/xapi/video/v/2",
            definition: {
              type: "https://w3id.org/xapi/video/activity-type/video",
            },
          },
        ],
      },
      extensions: {
        "https://w3id.org/xapi/video/extensions/volume": 1,
        "https://w3id.org/xapi/video/extensions/user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "https://w3id.org/xapi/video/extensions/speed": "1x",
        "https://w3id.org/xapi/video/extensions/length": 60,
      },
    },
  };

  console.log("req: ", xapiStatement);

  // Send your statement
  xapi.sendStatement({
    statement: xapiStatement,
  });
}

function videoPlay(currentTime, desc) {
  const xapiStatement = {
    actor: {
      objectType: "Agent",
      account: {
        homePage: "https://example.platform.jp",
        name: "test001",
      },
    },
    verb: {
      id: "https://w3id.org/xapi/video/verbs/played",
      display: { "en-us": "played" },
    },
    object: {
      id: "https://demo.flak.works/video?video_id=14",
      objectType: "Activity",
      definition: {
        type: "https://w3id.org/xapi/video/activity-type/video",
        name: { "en-us": "Jim Goes Fishing" },
        description: {
          "en-us": desc,
          "ja-jp": desc,
        },
      },
    },
    result: {
      extensions: {
        "https://w3id.org/xapi/video/extensions/time": currentTime,
      },
    },
    context: {
      contextActivities: {
        category: [
          {
            id: "https://w3id.org/xapi/video/v/2",
            definition: {
              type: "https://w3id.org/xapi/video/activity-type/video",
            },
          },
        ],
      },
      extensions: {
        "https://w3id.org/xapi/video/extensions/length": 60,
      },
    },
  };

  console.log("req: ", xapiStatement);

  // Send your statement
  xapi.sendStatement({
    statement: xapiStatement,
  });
}

function videoPause(currentTime, desc) {
  const xapiStatement = {
    actor: {
      objectType: "Agent",
      account: {
        homePage: "https://example.platform.jp",
        name: "test001",
      },
    },
    verb: {
      id: "https://w3id.org/xapi/video/verbs/paused",
      display: { "en-us": "paused" },
    },
    object: {
      id: "https://demo.flak.works/video?video_id=14",
      objectType: "Activity",
      definition: {
        type: "https://w3id.org/xapi/video/activity-type/video",
        name: { "en-us": "Jim Goes Fishing" },
        description: {
          "en-us": desc,
          "ja-jp": desc,
        },
      },
    },
    result: {
      extensions: {
        "https://w3id.org/xapi/video/extensions/progress": currentTime / 60,
        "https://w3id.org/xapi/video/extensions/time": currentTime,
      },
    },
    context: {
      contextActivities: {
        category: [
          {
            id: "https://w3id.org/xapi/video/v/2",
            definition: {
              type: "https://w3id.org/xapi/video/activity-type/video",
            },
          },
        ],
      },
      extensions: {
        "https://w3id.org/xapi/video/extensions/length": 60,
      },
    },
  };

  console.log("req: ", xapiStatement);

  // Send your statement
  xapi.sendStatement({
    statement: xapiStatement,
  });
}

function videoMuted(currentTime, desc) {
  const xapiStatement = {
    actor: {
      objectType: "Agent",
      account: {
        homePage: "https://example.platform.jp",
        name: "test001",
      },
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/interacted",
      display: { "en-us": "interacted" },
    },
    object: {
      id: "https://demo.flak.works/video?video_id=14",
      objectType: "Activity",
      definition: {
        type: "https://w3id.org/xapi/video/activity-type/video",
        name: { "en-us": "Jim Goes Fishing" },
        description: {
          "en-us": desc,
          "ja-jp": desc,
        },
      },
    },
    result: {
      extensions: {
        "https://w3id.org/xapi/video/extensions/time": currentTime,
      },
    },
    context: {
      contextActivities: {
        category: [
          {
            id: "https://w3id.org/xapi/video/v/2",
            definition: {
              type: "https://w3id.org/xapi/video/activity-type/video",
            },
          },
        ],
      },
      extensions: {
        "https://w3id.org/xapi/video/extensions/volume": 0,
        "https://w3id.org/xapi/video/extensions/length": 60,
      },
    },
  };

  console.log("req: ", xapiStatement);

  // Send your statement
  xapi.sendStatement({
    statement: xapiStatement,
  });
}

function videoUnmuted(currentTime, desc) {
  const xapiStatement = {
    actor: {
      objectType: "Agent",
      account: {
        homePage: "https://example.platform.jp",
        name: "test001",
      },
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/interacted",
      display: { "en-us": "interacted" },
    },
    object: {
      id: "https://demo.flak.works/video?video_id=14",
      objectType: "Activity",
      definition: {
        type: "https://w3id.org/xapi/video/activity-type/video",
        name: { "en-us": "Jim Goes Fishing" },
        description: {
          "en-us": desc,
          "ja-jp": desc,
        },
      },
    },
    result: {
      extensions: {
        "https://w3id.org/xapi/video/extensions/time": currentTime,
      },
    },
    context: {
      contextActivities: {
        category: [
          {
            id: "https://w3id.org/xapi/video/v/2",
            definition: {
              type: "https://w3id.org/xapi/video/activity-type/video",
            },
          },
        ],
      },
      extensions: {
        "https://w3id.org/xapi/video/extensions/volume": 1,
        "https://w3id.org/xapi/video/extensions/length": 60,
      },
    },
  };

  console.log("req: ", xapiStatement);

  // Send your statement
  xapi.sendStatement({
    statement: xapiStatement,
  });
}

function videoCompleted(desc) {
  const xapiStatement = {
    actor: {
      objectType: "Agent",
      account: {
        homePage: "https://example.platform.jp",
        name: "test001",
      },
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/completed",
      display: { "en-us": "completed" },
    },
    object: {
      id: "https://demo.flak.works/video?video_id=14",
      objectType: "Activity",
      definition: {
        type: "https://w3id.org/xapi/video/activity-type/video",
        name: { "en-us": "Jim Goes Fishing" },
        description: {
          "en-us": desc,
          "ja-jp": desc,
        },
      },
    },
    result: {
      extensions: {
        "https://w3id.org/xapi/video/extensions/progress": 1,
        "https://w3id.org/xapi/video/extensions/time": 60,
      },
    },
    context: {
      contextActivities: {
        category: [
          {
            id: "https://w3id.org/xapi/video/v/2",
            definition: {
              type: "https://w3id.org/xapi/video/activity-type/video",
            },
          },
        ],
      },
      extensions: {
        "https://w3id.org/xapi/video/extensions/length": 60,
      },
    },
  };

  console.log("req: ", xapiStatement);

  // Send your statement
  xapi.sendStatement({
    statement: xapiStatement,
  });
}

// Get video desc
const desc1 = document
  .getElementById("course-detail-main")
  .getElementsByClassName("course-detail-main-container")[0]
  .getElementsByTagName("p")[0].innerHTML;

const desc2 = document
  .getElementById("course-detail-main")
  .getElementsByClassName("course-detail-support-container")[0]
  .getElementsByTagName("h4")[0].innerHTML;

const desc = desc1 + "\n" + desc2;

// Get video object
const video = document.getElementById("my-video_html5_api");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Trang web đã tải hoàn toàn.");
  videoInit(desc);
});

video.addEventListener("play", function () {
  console.log("Video đã bắt đầu chạy " + video.currentTime);
  videoPlay(video.currentTime, desc);
});

video.addEventListener("pause", function () {
  console.log("Video đã tạm dừng " + video.currentTime);
  videoPause(video.currentTime, desc);
});

video.addEventListener("ended", function () {
  console.log("Video đã kết thúc");
  videoCompleted(desc);
});

// Sự kiện khi trạng thái âm lượng thay đổi
video.addEventListener("volumechange", function () {
  if (video.muted) {
    console.log("Âm thanh đã được tắt " + video.currentTime);
    videoMuted(video.currentTime, desc);
  } else {
    console.log("Âm thanh đã được bật " + video.currentTime);
    videoUnmuted(video.currentTime, desc);
  }
});
