(function () {
  "use strict";

  console.log("math script run");

  // Конфигурация ответов по ID вопроса
  const answersData = {
    //УПР 1
    16752338: {
      answers: [
        {
          type: "chooser",
          values: [[1, 4]],
        },
      ],
    },
    16752314: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    16752352: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
        {
          type: "select",
          values: [1, 1],
        },
      ],
    },
    16752310: {
      answers: [
        {
          type: "select",
          values: [1, 2, 1],
        },
      ],
    },
    16752304: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16752348: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
        {
          type: "text",
          values: ["25"],
        },
      ],
    },
    16752295: {
      answers: [
        {
          type: "chooser",
          values: [[0, 3]],
        },
      ],
    },
    16752324: {
      answers: [
        {
          type: "text",
          values: ["454"],
        },
      ],
    },
    16752287: {
      answers: [
        {
          type: "chooser",
          values: [[1, 3]],
        },
      ],
    },
    16752281: {
      answers: [
        {
          type: "chooser",
          values: [[0, 4, 5]],
        },
      ],
    },

    // УПР 2
    16752525: {
      answers: [
        {
          type: "text",
          values: [3429],
        },
      ],
    },
    16752515: {
      answers: [
        {
          type: "text",
          values: [3993],
        },
      ],
    },
    16752500: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16752491: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    16752482: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16752477: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16752532: {
      answers: [
        {
          type: "chooser",
          values: [[1], [2]],
        },
      ],
    },
    16752471: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16752467: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16752464: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" },
            { "item-id": "drag-5", "target-id": "target2" },
            { "item-id": "drag-6", "target-id": "target3" },
          ],
        },
      ],
    },

    // УПР  3
    16762127: {
      answers: [
        {
          type: "chooser",
          values: [[0], [1]],
        },
      ],
    },
    16762113: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16762109: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },

    16762107: {
      answers: [
        {
          type: "chooser",
          values: [[0, 3]],
        },
      ],
    },
    16762106: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16762099: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16762125: {
      answers: [
        {
          type: "chooser",
          values: [[1], [1]],
        },
      ],
    },
    16762095: {
      answers: [
        {
          type: "chooser",
          values: [[0, 1]],
        },
      ],
    },
    16762092: {
      answers: [
        {
          type: "text",
          values: [19],
        },
      ],
    },
    16762090: {
      answers: [
        {
          type: "text",
          values: [17],
        },
      ],
    },

    // УПР 4
    16762306: {
      answers: [
        {
          type: "text",
          values: [2],
        },
      ],
    },
    16762303: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16762291: {
      answers: [
        {
          type: "text",
          values: [38],
        },
      ],
    },
    16762284: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
        {
          type: "select",
          values: [2, 1],
        },
      ],
    },
    16762277: {
      answers: [
        {
          type: "text",
          values: [52],
        },
      ],
    },
    16762267: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16762257: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16762255: {
      answers: [
        {
          type: "text",
          values: [100, 225],
        },
      ],
    },
    16762253: {
      answers: [{ type: "text", values: [3] }],
    },
    16762243: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    // УПР 5
    16763032: {
      answers: [
        {
          type: "text",
          values: [9],
        },
      ],
    },
    16763029: {
      answers: [
        {
          type: "select",
          values: [1, 2],
        },
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16777657: {
      answers: [
        {
          type: "select",
          values: [1, 2],
        },
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16763025: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16763015: {
      answers: [
        {
          type: "text",
          values: [246],
        },
      ],
    },
    16763011: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16763000: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16762996: {
      answers: [
        {
          type: "text",
          values: [8575],
        },
      ],
    },
    16762991: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16777642: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    // УПР 6
    16763259: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
        {
          type: "select",
          values: [2, 1, 3],
        },
      ],
    },
    16763250: {
      answers: [
        {
          type: "text",
          values: [100],
        },
      ],
    },
    16763245: {
      answers: [
        {
          type: "text",
          values: [1745],
        },
      ],
    },
    16763238: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    16763233: {
      answers: [
        {
          type: "text",
          values: ["50,2", "1/2"],
        },
      ],
    },
    16763225: {
      answers: [
        {
          type: "chooser",
          values: [[0, 2]],
        },
      ],
    },
    16763242: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16763207: {
      answers: [
        {
          type: "text",
          values: ["53,5", "72,25"],
        },
      ],
    },
    16763203: {
      answers: [
        {
          type: "text",
          values: ["84,3"],
        },
      ],
    },
    16763215: {
      answers: [
        {
          type: "text",
          values: ["5,45"],
        },
      ],
    },

    // УПР 7
    16763964: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16763959: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    16763954: {
      answers: [
        {
          type: "select",
          values: [2, 2, 4, 3],
        },
        {
          type: "text",
          values: ["100", "0", "400", "500"],
        },
      ],
    },
    16763950: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16763994: {
      answers: [
        {
          type: "chooser",
          values: [[1], [0], [0]],
        },
      ],
    },
    16763985: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
        {
          type: "text",
          values: ["16,67", "1"],
        },
      ],
    },
    16763937: {
      answers: [
        {
          type: "text",
          values: ["10,38"],
        },
      ],
    },
    16763931: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16763928: {
      answers: [
        {
          type: "text",
          values: ["0,1"],
        },
      ],
    },
    16763981: {
      answers: [
        {
          type: "chooser",
          values: [[2], [0]],
        },
      ],
    },

    // УПР 7
    16764669: {
      answers: [
        {
          type: "text",
          values: ["56", "7", "8"],
        },
      ],
    },
    16764685: {
      answers: [
        {
          type: "chooser",
          values: [[1], [0, 1, 2]],
        },
      ],
    },

    16764659: {
      answers: [
        {
          type: "chooser",
          values: [[1, 3]],
        },
      ],
    },

    16764650: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16764644: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16764640: {
      answers: [
        {
          type: "text",
          values: ["21"],
        },
      ],
    },
    16764683: {
      answers: [
        {
          type: "chooser",
          values: [[1], [1], [0], [0], [1]],
        },
      ],
    },
    16764631: {
      answers: [
        {
          type: "text",
          values: ["9", "7", "4"],
        },
      ],
    },
    16764621: {
      answers: [
        {
          type: "text",
          values: ["0,33"],
        },
      ],
    },
    16764619: {
      answers: [
        {
          type: "chooser",
          values: [[2, 3]],
        },
      ],
    },
    16765031: {
      answers: [
        {
          type: "text",
          values: ["40"],
        },
      ],
    },
    16765026: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    16765054: {
      answers: [
        {
          type: "chooser",
          values: [[2], [1], [1]],
        },
      ],
    },
    16765020: {
      answers: [
        {
          type: "text",
          values: ["27720"],
        },
      ],
    },
    16765010: {
      answers: [
        {
          type: "text",
          values: ["0,08", "0,92"],
        },
      ],
    },
    16765005: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16765001: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16764993: {
      answers: [
        {
          type: "chooser",
          values: [[4]],
        },
      ],
    },
    16764991: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
        {
          type: "text",
          values: ["400"],
        },
        {
          type: "select",
          values: [1],
        },
      ],
    },

    16765049: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },

    // УПР 10
    16765463: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16765455: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16765449: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16765443: {
      answers: [
        {
          type: "text",
          values: ["252"],
        },
      ],
    },
    16765474: {
      answers: [
        {
          type: "chooser",
          values: [[1], [0], [1]],
        },
      ],
    },
    16765435: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    16765431: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16765470: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16765419: {
      answers: [
        {
          type: "text",
          values: ["102"],
        },
      ],
    },
    16765421: {
      answers: [
        {
          type: "text",
          values: ["1200"],
        },
      ],
    },
    16765696: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16765687: {
      answers: [
        {
          type: "text",
          values: ["15"],
        },
      ],
    },
    16765681: {
      answers: [
        {
          type: "chooser",
          values: [[1, 5, 6, 8, 9]],
        },
      ],
    },
    16765675: {
      answers: [
        {
          type: "chooser",
          values: [[4]],
        },
      ],
    },
    16765673: {
      answers: [
        {
          type: "text",
          values: ["37,680"],
        },
      ],
    },
    16765662: {
      answers: [
        {
          type: "text",
          values: ["600"],
        },
      ],
    },
    16765656: {
      answers: [
        {
          type: "text",
          values: ["250"],
        },
      ],
    },
    16765651: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16765644: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16765647: {
      answers: [
        {
          type: "text",
          values: ["74"],
        },
      ],
    },
    // УПР 12
    16765947: {
      answers: [
        {
          type: "text",
          values: ["500", "4500", "30000"],
        },
      ],
    },
    16765937: {
      answers: [
        {
          type: "text",
          values: ["30000", "0,154"],
        },
      ],
    },
    16765930: {
      answers: [
        {
          type: "text",
          values: ["48000", "47639"],
        },
      ],
    },
    16765921: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16765916: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16765906: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    16765897: {
      answers: [
        {
          type: "text",
          values: ["84", "84", "48"],
        },
      ],
    },
    16765953: {
      answers: [
        {
          type: "chooser",
          values: [[0], [1], [0]],
        },
      ],
    },
    16765890: {
      answers: [
        {
          type: "text",
          values: ["4"],
        },
      ],
    },
    16765887: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    // УПР 13
    16767534: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16767526: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    16767519: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16767514: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16767507: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16767500: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16767496: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    16767488: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16767484: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16767480: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    // УПР 14
    16767724: {
      answers: [
        {
          type: "text",
          values: ["37"],
        },
      ],
    },
    16767743: {
      answers: [
        {
          type: "text",
          values: ["188"],
        },
      ],
    },
    16767710: {
      answers: [
        {
          type: "chooser",
          values: [[1], [0], [1]],
        },
      ],
    },
    16767703: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16767728: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16767690: {
      answers: [
        {
          type: "chooser",
          values: [[1], [0]],
        },
      ],
    },
    16767686: {
      answers: [
        {
          type: "text",
          values: ["1", "2"],
        },
      ],
    },
    16767679: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16767673: {
      answers: [
        {
          type: "text",
          values: ["8"],
        },
      ],
    },
    16767736: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
        {
          type: "text",
          values: ["992"],
        },
      ],
    },

    // УПР 15
    16768057: {
      answers: [
        {
          type: "text",
          values: ["17"],
        },
      ],
    },
    16768054: {
      answers: [
        {
          type: "text",
          values: ["51,75"],
        },
      ],
    },
    16768048: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
        {
          type: "text",
          values: ["3"],
        },
      ],
    },
    16768039: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16768028: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16768023: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16768015: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16768010: {
      answers: [
        {
          type: "text",
          values: ["19"],
        },
      ],
    },
    16768004: {
      answers: [
        {
          type: "text",
          values: ["61500"],
        },
      ],
    },
    16767998: {
      answers: [
        {
          type: "select",
          values: [1, 2, 1, 1],
        },
        {
          type: "text",
          values: ["13500", "13600", "100"],
        },
      ],
    },
  };

  const observeTopicDivs = (onHas, type) => {
    const observer = new MutationObserver((mutations, observerInstance) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const topicDivs = document.querySelectorAll(
            `body.${type} div[class^=topic-main]:not(.topic-disabled__1-jCQ)`
          );

          if (topicDivs.length > 0) {
            const lastIndex = topicDivs.length - 1;

            proxyState.currentTopicIndex = lastIndex;

            onHas(topicDivs, lastIndex, observerInstance);
            if (lastIndex >= 15) {
              observerInstance.disconnect();
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  let state = {
    currentTopicIndex: 0,
    questionId: null,
  };

  let handler = {
    set: function (obj, prop, value) {
      if (prop === "currentTopicIndex" && value !== obj[prop]) {
        console.log(`property set: ${prop} = ${value}`);

        if (value >= 15) {
          alert("все тесты математики успешно пройдены!");
        } else {
          const topicDivs = document?.querySelectorAll(
            `body.fix_math div[class^=topic-main]:not(.topic-disabled__1-jCQ)`
          );

          const currentTopic = topicDivs[value];
          console.log(currentTopic, "currentTopic");

          topicDivs.forEach((topicDiv) => {
            topicDiv.style.backgroundColor = "transparent";
            topicDiv.classList.remove("active-topic");
          });

          currentTopic.style.backgroundColor = "green";
          currentTopic.classList.add("active-topic");

          currentTopic.click();
        }
      }
      obj[prop] = value;
      return true;
    },
  };

  let proxyState = new Proxy(state, handler);

  let isObserverStarted = false; // Флаг для отслеживания запуска наблюдателя

  let isXHRIntercepted = false;
  let isAnswersInserted = false;

  const getDynamicSuffix = () => {
    const listItems = document.querySelectorAll('li[class^="dd-list-item"]');
    for (let item of listItems) {
      if (item.textContent.startsWith("DGHR-MATH-")) {
        return item.textContent.replace("DGHR-MATH-", "").trim();
      }
    }
    return null;
  };

  // Хранилище для отслеживания состояния кликов по селекторам
  const clickedElements = new Set();

  const observeAndClick = (
    selector,
    delay = 1000,
    handler = (element) => {},
    timeout = 10000
  ) => {
    // Если по этому селектору уже был клик - выходим
    if (clickedElements.has(selector)) {
      console.log(`Click already processed for: ${selector}`);
      return;
    }

    let timeoutId;

    const observer = new MutationObserver((mutations, observerInstance) => {
      const element = document.querySelector(selector);
      if (element && !clickedElements.has(selector)) {
        observerInstance.disconnect();
        clearTimeout(timeoutId);

        // Помечаем селектор как обработанный
        clickedElements.add(selector);

        setTimeout(() => {
          element.click();
          handler?.(element);
          console.log(`Clicked element: ${selector}`);
        }, delay);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    timeoutId = setTimeout(() => {
      observer.disconnect();
      console.log(`Element ${selector} not found within ${timeout}ms`);
    }, timeout);

    const element = document.querySelector(selector);
    if (element && !clickedElements.has(selector)) {
      observer.disconnect();
      clearTimeout(timeoutId);

      // Помечаем селектор как обработанный
      clickedElements.add(selector);

      setTimeout(() => {
        element.click();
        handler?.(element);
        console.log(`Clicked element: ${selector}`);
      }, delay);
    }
  };

  // Функция для очистки истории кликов (используйте при необходимости сбросить состояние)
  const resetClickHistory = () => {
    clickedElements.clear();
  };
  // // Функция для ожидания появления элемента и добавления обработчика
  // const waitForElementAndHandle = (selector, handler, timeout = 5000) => {
  //   return new Promise((resolve, reject) => {
  //     // Если элемент уже существует
  //     if (document.querySelector(selector)) {
  //       const element = addClickHandlerOnce(
  //         document.querySelector(selector),
  //         handler
  //       );
  //       resolve(element);
  //       return;
  //     }

  //     const observer = new MutationObserver((mutations, observerInstance) => {
  //       const element = document.querySelector(selector);
  //       if (element) {
  //         // Останавливаем наблюдение
  //         observerInstance.disconnect();
  //         const handledElement = addClickHandlerOnce(element, handler);
  //         resolve(handledElement);
  //       }
  //     });

  //     // Настройка observer
  //     observer.observe(document.body, {
  //       childList: true,
  //       subtree: true,
  //     });

  //     // Таймаут для прекращения ожидания
  //     setTimeout(() => {
  //       observer.disconnect();
  //       reject(`Element ${selector} not found within ${timeout}ms`);
  //     }, timeout);
  //   });
  // };

  // const addClickHandlerOnce = (element, handler, delay = 0) => {
  //   if (!element) {
  //     console.log("element not found", element);
  //     return;
  //   }

  //   // Удаляем все существующие обработчики
  //   const clonedElement = element.cloneNode(true);
  //   element.parentNode.replaceChild(clonedElement, element);

  //   // Добавляем один обработчик после задержки
  //   setTimeout(() => {
  //     clonedElement.addEventListener(
  //       "click",
  //       (event) => {
  //         // Предотвращаем множественные быстрые клики
  //         clonedElement.style.pointerEvents = "none";
  //         handler(event);

  //         // Возвращаем возможность клика через короткое время
  //         setTimeout(() => {
  //           clonedElement.style.pointerEvents = "auto";
  //         }, 1000);
  //       },
  //       { once: true }
  //     ); // Обработчик сработает только один раз
  //   }, delay);

  //   return clonedElement;
  // };

  const interceptXHRRequests = () => {
    if (isXHRIntercepted) return;
    isXHRIntercepted = true;

    // Сохраняем оригинальные методы
    const originalXHR = window.XMLHttpRequest;

    // Создаем новый конструктор XMLHttpRequest
    function XMLHttpRequestProxy() {
      const xhr = new originalXHR();

      // Перехватываем open
      const originalOpen = xhr.open;
      xhr.open = function () {
        xhr._url = arguments[1];
        return originalOpen.apply(xhr, arguments);
      };

      // Перехватываем send
      const originalSend = xhr.send;
      xhr.send = function () {
        const originalOnReadyStateChange = xhr.onreadystatechange;

        xhr.onreadystatechange = function () {
          const dynamicSuffix = getDynamicSuffix();
          if (
            xhr.readyState === 4 &&
            (xhr.status === 200 || xhr.status === 201)
          ) {
            try {
              if (xhr._url && xhr._url.includes("/next_question/")) {
                const response = JSON.parse(xhr.responseText);
                const questionId = response.question?.id;
                proxyState.questionId = questionId;
                resetClickHistory();

                console.log("Перехвачен запрос next_question, ID:", questionId);

                if (questionId && answersData[questionId]) {
                  console.log("Обработка вопроса:", questionId);
                  setTimeout(() => processQuestion(questionId), 1000);
                }
              } else if (xhr._url && xhr._url.includes("/submit_response/")) {
                const response = JSON.parse(xhr.responseText);

                if (response.title === "RIGHT") {
                  showNotification("Ответ правильный");
                  isAnswersInserted = false;

                  if (response.user_progress === 100) {
                    if (proxyState.currentTopicIndex === 14) {
                      alert("Поздравляем! Вы прошли все тесты по MATH");
                    } else {
                      observeAndClick('div[class^="choose-btn"]', 1000);
                      observeAndClick('div[class^="try-button"]', 1000);
                    }
                  } else {
                    observeAndClick('div[class^="try-button"]', 1000);
                  }
                }
              } else if (
                xhr._url &&
                xhr._url.includes(
                  `/api/v2/users/student-class/DGHR-MATH-${dynamicSuffix}/chapters/`
                )
              ) {
                // console.log(response, "math");
              } else if (
                xhr._url &&
                xhr._url.includes(
                  `/api/v2/users/student-class/DGHR-MATH-${dynamicSuffix}/chapter/`
                ) &&
                xhr._url.includes("/topics/")
              ) {
                const response = JSON.parse(xhr.responseText)?.[0];
                const userProgress = response.user_progress;
                if (userProgress === 100) {
                  observeAndClick("div[class^=goback-button]", 1000, () => {
                    // proxyState.currentTopicIndex += 1;
                  });
                } else {
                  observeAndClick("div[class^=practice-btn]", 1000);
                }
              }
            } catch (e) {
              console.error("Ошибка при обработке ответа:", e);
            }
          }

          // Вызываем оригинальный обработчик, если он есть
          if (originalOnReadyStateChange) {
            originalOnReadyStateChange.apply(xhr, arguments);
          }
        };

        return originalSend.apply(xhr, arguments);
      };

      return xhr;
    }

    // Заменяем оригинальный XMLHttpRequest на наш прокси
    window.XMLHttpRequest = XMLHttpRequestProxy;
  };

  const logDragItems = () => {};

  const detectQuestionType = () => {
    const selects = document.querySelectorAll(
      "select[class^=cerebry_answer_input]"
    );
    const dragContainer = document.querySelector(".d-n-d-container");

    if (selects.length > 0) return "select";
    if (dragContainer) {
      logDragItems();
      return "drag";
    }
    return null;
  };

  const setSelectValue = (selectElement, index) => {
    if (selectElement && selectElement.options[index]) {
      selectElement.selectedIndex = index;
      const event = new Event("change", { bubbles: true });
      selectElement.dispatchEvent(event);
    } else {
      console.error("Неверный индекс или селект", selectElement, index);
    }
  };

  const handleChooserClick = (values) => {
    let observer; // Объявляем наблюдатель вне функции, чтобы иметь к нему доступ

    const processForms = () => {
      // Ищем все формы с классом YwzZU-JBlBsI70aaM6INT
      const solutionsForms = document.querySelectorAll(
        ".YwzZU-JBlBsI70aaM6INT"
      );

      if (solutionsForms.length > 0) {
        console.log("Элементы найдены. Начинаем обработку...");

        values.forEach((formValues, formIndex) => {
          const form = solutionsForms[formIndex];
          if (!form) {
            console.warn(`Форма с индексом ${formIndex} отсутствует.`);
            return;
          }

          // Найти все элементы с data-index внутри формы
          const divs = form.querySelectorAll("div[data-index]");
          if (!divs || divs.length === 0) {
            console.warn(
              `Элементы с data-index в форме ${formIndex} ещё не добавлены.`
            );
            return;
          }

          // Сброс активных элементов
          // divs.forEach((div) => div.classList.remove("active"));

          // Установить активные элементы
          formValues.forEach((value) => {
            const div = divs[value];
            if (div && !div.classList.contains("active")) {
              div.click();
              div.classList.add("active");
            } else {
              console.error(
                `Элемент с data-index=${value} не найден в форме ${formIndex}.`
              );
            }
          });
        });

        // Отключаем наблюдатель после обработки
        if (observer) {
          observer.disconnect();
          console.log("MutationObserver отключён.");
        }
      }
    };

    observer = new MutationObserver((mutations, observerInstance) => {
      processForms(); // Вызываем обработку, если DOM изменился
    });

    // Запускаем наблюдение за изменениями в body
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Пробуем сразу выполнить обработку, если элементы уже есть
    processForms();
  };

  const handleTextInput = (values) => {
    const textInputs = document.querySelectorAll('input[type="text"]');
    if (!textInputs.length) {
      console.error("Текстовые input элементы не найдены");
      return;
    }

    values.forEach((value, index) => {
      const inputElement = textInputs[index];
      if (inputElement) {
        inputElement.value = value;
        const event = new Event("input", { bubbles: true });
        inputElement.dispatchEvent(event);
      } else {
        console.error(`Input элемент с индексом ${index} не найден`);
      }
    });
  };

  const handleDragDrop = (answers, answerIndex) => {
    const dndContainers = document.querySelectorAll(".d-n-d-container");
    if (!dndContainers.length) {
      console.error("Контейнер для drag&drop не найден");
      return;
    }

    const dndContainer = dndContainers[answerIndex];
    if (!dndContainer) {
      console.error(
        `Контейнер для drag&drop с индексом ${answerIndex} не найден`
      );
      return;
    }

    const containerId = dndContainer.id;
    const appendFunctionName = `appendItemsToTargets_${containerId}`;
    const appendFunction = window[appendFunctionName];

    if (typeof appendFunction === "function") {
      appendFunction(answers);
    } else {
      console.error(
        `Функция для drag&drop не найдена для контейнера ${containerId}`
      );
    }
  };

  const areAllAnswersInserted = (questionData) => {
    if (!questionData || !questionData.answers) return false;

    let allInserted = true;

    questionData.answers.forEach((answer) => {
      switch (answer.type) {
        case "select":
          const allSelects = document.querySelectorAll(
            "select.cerebry_answer_input"
          );
          answer.values.forEach((selectIndex, i) => {
            const selectElement = allSelects[i];
            if (!selectElement || selectElement.selectedIndex !== selectIndex) {
              allInserted = false;
            }
          });
          break;

        case "drag":
          const dndContainers = document.querySelectorAll(".d-n-d-container");
          if (!dndContainers.length) {
            allInserted = false;
          }
          break;

        case "text":
          const textInputs = document.querySelectorAll('input[type="text"]');
          answer.values.forEach((value, i) => {
            const inputElement = textInputs[i];
            if (
              !inputElement ||
              !inputElement.value ||
              inputElement.value !== value.toString()
            ) {
              allInserted = false;
            }
          });
          break;

        case "chooser":
          const solutionsForms = document.querySelectorAll(
            ".YwzZU-JBlBsI70aaM6INT"
          );
          answer.values.forEach((formValues, formIndex) => {
            const form = solutionsForms[formIndex];
            if (!form) {
              allInserted = false;
              return;
            }

            const selectedDivs = form.querySelectorAll(
              "div[data-index].active"
            );
            if (selectedDivs.length !== formValues.length) {
              allInserted = false;
              return;
            }

            // Проверяем, что все выбранные значения соответствуют ожидаемым
            const selectedIndices = Array.from(selectedDivs).map((div) =>
              parseInt(div.getAttribute("data-index"))
            );

            formValues.forEach((expectedValue) => {
              if (!selectedIndices.includes(expectedValue)) {
                allInserted = false;
              }
            });
          });
          break;
      }
    });

    return allInserted;
  };

  const processQuestionByType = (questionData) => {
    if (!questionData || !questionData.answers) return;

    // console.log(questionData.answers, "selectElement");
    let dragIndex = 0; // Индекс для drag элементов

    questionData.answers.forEach((answer, index) => {
      if (answer.type === "select") {
        const allSelects = document.querySelectorAll(
          "select[class^=cerebry_answer_input]"
        );
        answer.values.forEach((selectIndex, i) => {
          const selectElement = allSelects[i];
          // console.log(selectElement, "selectElement");
          if (selectElement) {
            setSelectValue(selectElement, selectIndex);
          }
        });
      } else if (answer.type === "chooser") {
        handleChooserClick(answer.values);
      } else if (answer.type === "text") {
        handleTextInput(answer.values);
      } else if (answer.type === "drag") {
        handleDragDrop(answer.values, dragIndex);
        dragIndex++; // Увеличиваем индекс для drag элементов
      }
    });

    if (areAllAnswersInserted(questionData)) {
      isAnswersInserted = true;
      const checkButton = document.querySelector('div[class^="check-button"]');
      checkButton.setAttribute("type", "button");
      observeAndClick('div[class^="check-button"]', 1000);
    }
  };

  const processQuestion = (questionId) => {
    const questionData = answersData[questionId];
    if (!questionData) {
      console.error(`Данные для вопроса ID: ${questionId} не найдены`);
      detectQuestionType();
      return;
    }

    processQuestionByType(questionData);
  };

  const showNotification = (message) => {
    const notification = document.createElement("div");
    notification.innerText = message;
    notification.style.position = "fixed";
    notification.style.bottom = "10px";
    notification.style.right = "10px";
    notification.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    notification.style.color = "white";
    notification.style.padding = "10px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "1000";
    notification.style.width = "300px";
    notification.style.height = "100px";
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 5000);
  };

  const observeBodyForHeader = () => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const headerTitle = document.querySelector(
            'div[class^="dd-header-title"]'
          );
          if (headerTitle) {
            const dynamicSuffix = getDynamicSuffix();
            // console.log(getDynamicSuffix(), "getDynamicSuffix");
            if (
              headerTitle.textContent.trim() === `DGHR-MATH-${dynamicSuffix}`
            ) {
              // console.log(`Header title matched: DGHR-MATH-${dynamicSuffix}`);
              document.body.classList.add("fix_math");
              document.body.classList.remove("fix_science");

              if (!isObserverStarted) {
                isObserverStarted = true; // Устанавливаем флаг
                interceptXHRRequests();
                observeTopicDivs((topicDivs, lastIndex) => {
                  console.log("first topic divs observer");

                  topicDivs.forEach((topicDiv) => {
                    topicDiv.style.backgroundColor = "transparent";
                  });

                  topicDivs[lastIndex].style.backgroundColor = "green";

                  observeAndClick(
                    topicDivs[lastIndex].className,
                    1500,
                    () => {},
                    50000
                  );
                }, "fix_math");
              }
            } else {
              // console.log("Header title did not match. Stopping observer.");
              document.body.classList.add("fix_science");
              document.body.classList.remove("fix_math");

              if (isObserverStarted) {
                isObserverStarted = false; // Устанавливаем флаг
                observeTopicDivs((topicDivs) => {
                  topicDivs.forEach((topicDiv) => {
                    topicDiv.style.backgroundColor = "transparent";
                  });
                }, `fix_science`);
              }
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  // Запускаем наблюдатель за body
  observeBodyForHeader();

  // Экспортируем функции для отладки
  window.logDragItems = logDragItems;

  console.log("math script end");
})();
