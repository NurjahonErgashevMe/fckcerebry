(function () {
  "use strict";

  // Конфигурация ответов по ID вопроса
  const answersData = {
    //УПР 1
    16742411: {
      answers: [
        {
          type: "select",
          values: [3, 1, 1, 1, 1],
        },
      ],
    },
    16742451: {
      answers: [
        {
          type: "select",
          values: [2, 1, 2, 1, 1, 2, 2, 1, 1, 2],
        },
      ],
    },
    16742455: {
      answers: [
        {
          type: "select",
          values: [2, 1, 1, 1, 2],
        },
      ],
    },
    16742441: {
      answers: [
        {
          type: "select",
          values: [2, 1, 2, 3, 1, 1, 2],
        },
      ],
    },
    16742435: {
      answers: [
        {
          type: "select",
          values: [1, 2, 2],
        },
      ],
    },
    16742435: {
      //6
      answers: [
        {
          type: "select",
          values: [1, 2, 2, 1, 2, 1, 1, 2, 1, 2],
        },
      ],
    },
    16742448: {
      //6 (2)
      answers: [
        {
          type: "select",
          values: [1, 2, 2, 1, 2, 1, 1, 2, 1, 2],
        },
      ],
    },
    16742432: {
      answers: [
        {
          type: "select",
          values: [2, 1, 1, 2, 1, 2],
        },
      ],
    },
    16742468: {
      answers: [
        {
          type: "select",
          values: [1, 2, 3, 1, 2, 1, 1, 3, 1, 3, 3, 3, 3, 1],
        },
      ],
    },
    16742423: {
      answers: [
        {
          type: "select",
          values: [1, 2, 2],
        },
      ],
    },
    16742419: {
      answers: [
        {
          type: "select",
          values: [1, 1, 2, 2, 1, 1, 1, 2, 3],
        },
      ],
    },

    // УПР 2
    16742707: {
      answers: [
        {
          type: "select",
          values: [1, 1, 2, 1, 1, 1],
        },
      ],
    },
    16742754: {
      answers: [
        {
          type: "select",
          values: [2, 1, 1, 2, 2, 1, 2, 1, 1],
        },
      ],
    },
    16742748: {
      answers: [
        {
          type: "select",
          values: [3, 2, 3, 3, 1, 2, 2, 2],
        },
      ],
    },
    16742739: {
      answers: [
        {
          type: "select",
          values: [2, 1, 4, 3, 1, 2, 1, 4, 2, 3, 1, 4],
        },
      ],
    },
    16742736: {
      answers: [
        {
          type: "select",
          values: [2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2],
        },
      ],
    },
    16742738: {
      answers: [
        {
          type: "select",
          values: [1, 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1],
        },
      ],
    },
    16742721: {
      // Mavzu 2 Tabiiy resurslar S7
      answers: [
        {
          type: "select",
          values: [1, 1, 2, 1, 1, 2, 1, 2, 1],
        },
      ],
    },
    16742718: {
      // Mavzu 2 S8
      answers: [
        {
          type: "select",
          values: [1, 3, 1, 1, 3, 3, 1, 1, 1, 2, 3, 4, 1],
        },
      ],
    },
    // Пример комбинированного вопроса
    16751776: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-6", "target-id": "target3" },
          ],
        },
        {
          type: "select",
          values: [1, 1, 2, 3],
        },
      ],
    },
    16742719: {
      answers: [
        {
          type: "select",
          values: [3, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1],
        },
      ],
    },

    // УПР 3
    16747847: {
      answers: [
        {
          type: "select",
          values: [1, 2, 1, 2],
        },
      ],
    },
    16747839: {
      answers: [
        {
          type: "select",
          values: [1, 2, 1, 1, 2, 1, 2],
        },
      ],
    },
    16747885: {
      answers: [
        {
          type: "select",
          values: [1, 3, 2, 3, 2, 1, 1, 2],
        },
      ],
    },
    16747881: {
      answers: [
        {
          type: "select",
          values: [1, 1, 1, 2, 2, 2, 2, 1, 2, 2],
        },
      ],
    },
    16747880: {
      answers: [
        {
          type: "select",
          values: [2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 1],
        },
      ],
    },
    16747874: {
      answers: [
        {
          type: "select",
          values: [2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2],
        },
      ],
    },
    16747858: {
      answers: [
        {
          type: "select",
          values: [1, 4, 3, 2, 2, 1],
        },
      ],
    },
    16747854: {
      answers: [{ type: "select", values: [5, 2, 1, 1, 1] }],
    },
    16747865: {
      answers: [
        {
          type: "select",
          values: [3, 1, 2, 1, 2],
        },
      ],
    },
    16747852: {
      answers: [
        {
          type: "select",
          values: [1, 1, 3, 1, 1, 2, 3, 1, 3, 1, 1, 2, 3, 1, 2],
        },
      ],
    },
    // УПР 4
    16747998: {
      answers: [
        {
          type: "select",
          values: [1, 2, 1],
        },
      ],
    },
    16748048: {
      answers: [
        {
          type: "select",
          values: [2, 1, 2, 2, 1, 1],
        },
      ],
    },
    16748002: {
      answers: [
        {
          type: "select",
          values: [2, 1, 3, 3, 1, 1],
        },
      ],
    },
    16748045: {
      answers: [
        {
          type: "select",
          values: [1, 3, 4, 1, 4, 1, 3, 2],
        },
      ],
    },
    16748040: {
      answers: [
        {
          type: "select",
          values: [2, 2, 2, 1, 1, 2],
        },
      ],
    },
    16748037: {
      answers: [
        { type: "select", values: [2, 1, 2, 3, 1, 2, 1, 3, 3, 3, 1, 1] },
      ],
    },
    16748024: {
      answers: [{ type: "select", values: [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2] }],
    },
    16748022: {
      answers: [
        { type: "select", values: [1, 2, 2, 4, 1, 2, 1, 2, 2, 1, 1, 2] },
      ],
    },
    16748014: {
      answers: [{ type: "select", values: [2, 3, 1, 3, 1] }],
    },
    16748027: {
      answers: [{ type: "select", values: [1, 2, 3, 2, 2, 2] }],
    },

    // УПР 5
    16748224: {
      answers: [
        {
          type: "select",
          values: [3, 2, 1, 1, 2],
        },
      ],
    },
    16748203: {
      answers: [
        {
          type: "select",
          values: [1, 3, 3],
        },
      ],
    },
    16748217: {
      answers: [
        {
          type: "select",
          values: [2, 2, 2, 1, 2, 2],
        },
      ],
    },
    16748254: {
      answers: [
        {
          type: "select",
          values: [2, 2, 1, 2, 2, 2],
        },
      ],
    },
    16748249: {
      answers: [
        {
          type: "select",
          values: [2, 1, 2, 3, 1, 3],
        },
      ],
    },
    16748245: {
      answers: [
        {
          type: "select",
          values: [1, 2, 1, 2, 2, 2, 3, 2],
        },
      ],
    },
    16748244: {
      answers: [
        {
          type: "select",
          values: [1, 2, 2, 2, 1, 2, 3, 1, 1, 3, 3, 3, 1, 2, 2],
        },
      ],
    },

    16748233: {
      answers: [
        {
          type: "select",
          values: [2, 2, 2, 1, 2, 2, 2, 1],
        },
      ],
    },
    16748232: {
      answers: [
        {
          type: "select",
          values: [1, 1, 2, 3, 3, 2, 3],
        },
      ],
    },
    16748213: {
      answers: [
        {
          type: "select",
          values: [1, 1, 2, 2, 1, 1, 1, 3, 2, 2, 1, 2, 3, 1, 1, 2],
        },
      ],
    },
  };

  let isObserverStarted = false; // Флаг для отслеживания запуска наблюдателя

  const observeTopicDivs = (onHas, type) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const topicDivs = document.querySelectorAll(
            `body.${type} div[class^=topic-main]`
          );
          if (topicDivs.length > 0) {
            onHas(topicDivs, observer);
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
        resetClickHistory();
        observeTopicDivs((topicDivs, observer) => {
          if (value >= 5) {
            alert("все тесты science успешно пройдены!");
            observer.disconnect();
          } else {
            const currentTopic = topicDivs[value];
            console.log(currentTopic, "currentTopic");

            topicDivs.forEach((topicDiv) => {
              topicDiv.style.backgroundColor = "transparent";
              topicDiv.classList.remove("active-topic");
            });

            currentTopic.style.backgroundColor = "green";
            currentTopic.classList.add("active-topic");

            setTimeout(() => {
              currentTopic.click();
            }, 1000);
          }
        }, "fix_science");
      }
      obj[prop] = value;
      return true;
    },
  };

  const resetClickHistory = () => {
    clickedElements.clear();
  };

  let proxyState = new Proxy(state, handler);

  let isXHRIntercepted = false;
  let isAnswersInserted = false;

  const getDynamicSuffix = () => {
    const listItems = document.querySelectorAll('li[class^="dd-list-item"]');
    for (let item of listItems) {
      if (item.textContent.startsWith("DGHR-SCIENCE-")) {
        return item.textContent.replace("DGHR-SCIENCE-", "").trim();
      }
    }
    return null;
  };

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
                console.log(response, "response");
                if (response.title === "RIGHT") {
                  showNotification("Ответ правильный");
                  isAnswersInserted = false;
                  // if (
                  //   response.user_progress === 100 &&
                  //   response.topic_level_name.toLowerCase() === "qiyin"
                  // ) {
                  //   observeAndClick('div[class^="goback-button"]', 1500, () => {
                  //     proxyState.currentTopicIndex++;
                  //   });
                  // } else {
                  // }
                  observeAndClick('div[class^="try-button"]', 1500);
                }
              } else if (
                xhr._url &&
                xhr._url.includes(
                  `/api/v2/users/student-class/DGHR-SCIENCE-${dynamicSuffix}/chapter/`
                ) &&
                xhr._url.includes("/topics/")
              ) {
                const response = JSON.parse(xhr.responseText)?.[0];
                const userProgress = response.user_progress;
                if (
                  userProgress === 100 &&
                  response.topic_level_name.toLowerCase() == "qiyin"
                ) {
                  observeAndClick('div[class^="goback-button"]', 1500, () => {
                    setTimeout(() => {
                      proxyState.currentTopicIndex++;
                    }, 1000);
                  });
                } else {
                  observeAndClick('div[class^="practice-btn"]', 1500);
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

  // Оставляем остальные вспомогательные функции без изменений
  const getAvailableDragItems = () => {
    const itemsList = document.querySelectorAll('[data-id="itemslist"]');
    if (!itemsList.length) return [];

    let items = [];
    itemsList.forEach((list) => {
      const listItems = list.querySelectorAll('[draggable="true"]');
      items = items.concat(
        Array.from(listItems).map((item) => ({
          id: item.getAttribute("data-id"),
          text: item.textContent.trim(),
          containerId: list.closest(".d-n-d-container").id,
        }))
      );
    });

    return items;
  };

  const logDragItems = () => {
    const items = getAvailableDragItems();
    console.log("Доступные drag элементы:");
    items.forEach((item) => {
      console.log(`ID: ${item.id}, Текст: ${item.text}`);
    });
  };

  const detectQuestionType = () => {
    const selects = document.querySelectorAll("select.cerebry_answer_input");
    const dragContainer = document.querySelector(".d-n-d-container");

    if (selects.length > 0) return "select";
    if (dragContainer) {
      logDragItems();
      return "drag";
    }
    return null;
  };

  const setSelectValue = (selectElement, index) => {
    console.log(selectElement, "selectElement");
    if (selectElement && selectElement.options[index]) {
      selectElement.selectedIndex = index;
      const event = new Event("change", { bubbles: true });
      selectElement.dispatchEvent(event);
    } else {
      console.error("Неверный индекс или селект", selectElement, index);
    }
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
      if (answer.type === "select") {
        const allSelects = document.querySelectorAll(
          "select.cerebry_answer_input"
        );
        answer.values.forEach((selectIndex, i) => {
          const selectElement = allSelects[i];
          if (!selectElement || selectElement.selectedIndex !== selectIndex) {
            allInserted = false;
          }
        });
      } else if (answer.type === "drag") {
        // Проверка для drag элементов
        const dndContainers = document.querySelectorAll(".d-n-d-container");
        if (!dndContainers.length) {
          allInserted = false;
        }
        // Дополнительные проверки для drag элементов можно добавить здесь
      }
    });

    return allInserted;
  };

  const processQuestionByType = async (questionData) => {
    if (!questionData || !questionData.answers) return;

    let dragIndex = 0;

    await questionData.answers.forEach((answer, index) => {
      if (answer.type === "select") {
        const allSelects = document.querySelectorAll(
          "select.cerebry_answer_input"
        );
        answer.values.forEach((selectIndex, i) => {
          const selectElement = allSelects[i];
          if (selectElement) {
            setSelectValue(selectElement, selectIndex);
          }
        });
      } else if (answer.type === "drag") {
        handleDragDrop(answer.values, dragIndex);
        dragIndex++;
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
            console.log(getDynamicSuffix(), "getDynamicSuffix");
            if (
              headerTitle.textContent.trim() === `DGHR-SCIENCE-${dynamicSuffix}`
            ) {
              console.log(
                `Header title matched: DGHR-SCIENCE-${dynamicSuffix}`
              );
              document.body.classList.add("fix_science");
              document.body.classList.remove("fix_math");

              if (!isObserverStarted) {
                isObserverStarted = true;
                interceptXHRRequests();
                observeTopicDivs((topicDivs, observer) => {
                  if (proxyState.currentTopicIndex <= 5) {
                    topicDivs.forEach((topicDiv) => {
                      topicDiv.style.backgroundColor = "transparent";
                    });

                    topicDivs[
                      proxyState.currentTopicIndex
                    ].style.backgroundColor = "green";
                    setTimeout(() => {
                      topicDivs[proxyState.currentTopicIndex].click();
                    }, 1500);
                  } else {
                    alert("закончилось");
                    observer.disconnect();
                  }
                }, "fix_science");
              }
            } else {
              console.log("Header title did not match. Stopping observer.");
              document.body.classList.add("fix_math");
              document.body.classList.remove("fix_science");

              if (isObserverStarted) {
                isObserverStarted = false;
                observeTopicDivs((topicDivs) => {
                  topicDivs.forEach((topicDiv) => {
                    topicDiv.style.backgroundColor = "transparent";
                  });
                }, `fix_math`);
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

  // Добавляем функцию observeAndClick
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
})();
