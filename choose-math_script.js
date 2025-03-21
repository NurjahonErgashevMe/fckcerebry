(function () {
  "use strict";

  console.log("math script run");

  // Конфигурация ответов по ID вопроса
  const answersData = {
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
    16937643: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16937692: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16937732: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16937873: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
      ],
    },
    16938994: {
      answers: [
        {
          type: "math",
          values: ["0,37"],
        },
      ],
    },
    16937888: {
      answers: [
        {
          type: "select",
          values: [1, 1, 2],
        },
      ],
    },

    16938021: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
        {
          type: "select",
          values: [2],
        },
      ],
    },
    16939234: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16939411: {
      answers: [
        {
          type: "math",
          values: ["0,880"],
        },
      ],
    },
    16939423: {
      answers: [
        {
          type: "math",
          values: ["0,880"],
        },
      ],
    },
    16939423: {
      answers: [
        {
          type: "math",
          values: ["3"],
        },
      ],
    },
    16941796: {
      answers: [
        {
          type: "math",
          values: ["75"],
        },
      ],
    },
    16941921: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16942146: {
      answers: [
        {
          type: "text",
          values: [41, 190],
        },
      ],
    },
    16942244: {
      answers: [
        {
          type: "math",
          values: ["58,3"],
        },
      ],
    },
    16942250: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16942268: {
      answers: [
        {
          type: "math",
          values: ["41,4"],
        },
      ],
    },
    16942370: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16942951: {
      answers: [
        {
          type: "select",
          values: [1, 2, 1],
        },
      ],
    },
    16943282: {
      answers: [
        {
          type: "chooser",
          values: [[3]],
        },
      ],
    },
    16943363: {
      answers: [
        {
          type: "select",
          values: [1, 1],
        },
      ],
    },
    16951325: {
      answers: [
        {
          type: "chooser",
          values: [[2]],
        },
      ],
    },
    16951343: {
      answers: [
        {
          type: "math",
          values: ["121,50"],
        },
      ],
    },
    16951354: {
      answers: [
        {
          type: "math",
          values: ["27,5"],
        },
      ],
    },
    16951357: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16951669: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
        {
          type: "select",
          values: [1, 1, 3, 1],
        },
      ],
    },
    16952056: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
        {
          type: "select",
          values: [1, 1, 1, 1, 1],
        },
      ],
    },
    16952087: {
      answers: [
        {
          type: "chooser",
          values: [[0]],
        },
        {
          type: "select",
          values: [1, 1, 1, 1],
        },
      ],
    },
    16952105: {
      answers: [
        {
          type: "chooser",
          values: [[1]],
        },
      ],
    },
    16952113: {
      answers: [
        {
          type: "math",
          values: ["3"],
        },
      ],
    },
    16952149: {
      answers: [
        {
          type: "select",
          values: [1, 2],
        },
      ],
    },

    // 3 BOSHQICH
    17099612: {
      answers: [
        {
          type: "chooser",
          values: [[1, 4]],
        },
      ],
    },
  };

  // Функция для выбора раздела (topic)
  const observeTopicDivs = (onHas, type) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          // Ищем контейнер с разделами
          const topicContainer = document.querySelector(
            'div[class^="topic-list-container"]'
          );
          if (topicContainer) {
            // Находим все доступные разделы (исключаем disabled)
            const availableTopics = topicContainer.querySelectorAll(
              'div[class^="topic-main"]:not([class*="topic-disabled"])'
            );
            console.log(availableTopics, "availableTopics");

            if (availableTopics.length > 0) {
              // Выбираем последний раздел
              const lastAvailableTopic =
                availableTopics[availableTopics.length - 1];
              if (availableTopics.length === 3) {
                alert("math закончен!");
              } else {
                // Передаем только один элемент, а не массив
                onHas(lastAvailableTopic, observer);
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

  let state = {
    currentTopicIndex: 0,
    questionId: null,
  };

  let handler = {
    set: function (obj, prop, value) {
      if (prop === "currentTopicIndex" && value !== obj[prop]) {
        console.log(`property set: ${prop} = ${value}`);
        resetClickHistory();
        observeTopicDivs((topic, observer) => {
          if (value >= 5) {
            alert("все тесты math успешно пройдены!");
            observer.disconnect();
          } else {
            topic.style.backgroundColor = "green";
            setTimeout(() => {
              topic.click();
            }, 1000);
          }
        }, "fix_math");
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

        case "math":
          // Для типа math считаем, что ответ всегда вставлен
          // Фактическая модификация произойдет при отправке запроса
          break;
      }
    });

    return allInserted;
  };

  const processQuestionByType = (questionData) => {
    if (!questionData || !questionData.answers) return;

    let dragIndex = 0;

    questionData.answers.forEach((answer, index) => {
      if (answer.type === "select") {
        const allSelects = document.querySelectorAll(
          "select[class^=cerebry_answer_input]"
        );
        answer.values.forEach((selectIndex, i) => {
          const selectElement = allSelects[i];
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
        dragIndex++;
      } else if (answer.type === "math") {
        // Для типа math просто нажимаем кнопку проверки
        // Перехват и модификация запроса произойдет в interceptXHRRequests
        console.log("Обработка ответа типа math:", answer.values);

        // Можно добавить визуальное отображение ответа, если нужно
        const mathInputs = document.querySelectorAll(
          'input[type="text"][class*="math"]'
        );
        if (mathInputs.length > 0) {
          const formattedValue = answer.values[0].toString().replace(".", ",");
          mathInputs[0].value = formattedValue;

          // Генерируем событие input для обновления UI
          const event = new Event("input", { bubbles: true });
          mathInputs[0].dispatchEvent(event);
        }
      }
    });

    // Проверяем, есть ли ответ типа "math"
    const hasMathAnswer = questionData.answers.some(
      (answer) => answer.type === "math"
    );

    if (hasMathAnswer || areAllAnswersInserted(questionData)) {
      isAnswersInserted = true;
      const checkButton = document.querySelector('div[class^="check-button"]');
      if (checkButton) {
        checkButton.setAttribute("type", "button");
        observeAndClick('div[class^="check-button"]', 1000);
      }
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

  // Модифицируем observeBodyForHeader для корректной работы с новой структурой
  const observeBodyForHeader = () => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const headerTitle = document.querySelector(
            'div[class^="dd-header-title"]'
          );
          if (headerTitle) {
            const dynamicSuffix = getDynamicSuffix();
            if (
              headerTitle.textContent.trim() === `DGHR-MATH-${dynamicSuffix}`
            ) {
              document.body.classList.add("fix_math");
              document.body.classList.remove("fix_science");

              if (!isObserverStarted) {
                isObserverStarted = true;
                interceptXHRRequests();

                // Запускаем наблюдатель для выбора раздела (topic)
                observeTopicDivs((topic, observer) => {
                  console.log("Найден раздел (topic), кликаем на него");
                  topic.style.backgroundColor = "green";
                  setTimeout(() => {
                    topic.click();
                  }, 1500);
                }, "fix_math");
              }
            } else {
              document.body.classList.add("fix_science");
              document.body.classList.remove("fix_math");

              if (isObserverStarted) {
                isObserverStarted = false;
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

  // Модифицируем функцию для работы с subtopics
  const handleSubtopics = () => {
    // Находим все доступные subtopics (тесты), исключая те, у которых есть класс disbled-subtopic
    const allSubtopics = document.querySelectorAll(
      'div[class^="subclasses-name"]:not([class*="disbled-subtopic"])'
    );

    console.log(allSubtopics, "все subtopics");

    // Фильтруем, исключая те, у которых есть класс subtopic-clicked
    const availableSubtopics = Array.from(allSubtopics).filter((subtopic) => {
      console.log(subtopic.classList, "классы subtopic");
      console.log(
        subtopic.classList.contains("subtopic-clicked__3xV4X"),
        "классы clicked subtopic"
      );
      return !subtopic.className
        .split(" ")
        .some((cls) => cls.startsWith("subtopic-clicked"));
    });

    console.log(availableSubtopics, "доступные subtopics (без clicked)");

    if (availableSubtopics && availableSubtopics.length > 0) {
      // Берем последний доступный subtopic
      const lastAvailableSubtopic =
        availableSubtopics[availableSubtopics.length - 1];

      if (lastAvailableSubtopic) {
        console.log(
          "Выбираем последний доступный тест:",
          lastAvailableSubtopic
        );

        // Ищем кнопку practice внутри последнего доступного subtopic
        const practiceButton = lastAvailableSubtopic.querySelector(
          'button[class^="practice-btn"]'
        );

        console.log("Кликаем на кнопку practice в последнем доступном тесте");
        observeAndClick('div[class^="practice-btn"]', 1500, () => {
          console.log("Клик выполнен");
        });
      }
    } else {
      console.log("Нет доступных subtopics или все уже пройдены");
    }
  };

  // Модифицируем функцию interceptXHRRequests для обработки ответов типа "math"
  const interceptXHRRequests = () => {
    if (isXHRIntercepted) return;
    isXHRIntercepted = true;

    const originalXHR = window.XMLHttpRequest;

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
      xhr.send = function (data) {
        // Обработка onreadystatechange
        const originalOnReadyStateChange = xhr.onreadystatechange;
        xhr.onreadystatechange = function () {
          const dynamicSuffix = getDynamicSuffix();
          if (
            xhr.readyState === 4 &&
            (xhr.status === 200 || xhr.status === 201)
          ) {
            try {
              // Обрабатываем ответ после клика на раздел (topic)
              if (xhr._url && xhr._url.includes("/topics/")) {
                console.log("Перехвачен ответ от /topics/");

                try {
                  const response = JSON.parse(xhr.responseText);
                  console.log("Данные о разделах:", response);

                  if (response) {
                    console.log("Найдены subtopics:", response);
                    const allCompleted = response.every(
                      (subtopic) => subtopic.user_progress === 100
                    );

                    if (allCompleted) {
                      console.log(
                        "Все subtopics завершены, возвращаемся на topics."
                      );

                      observeAndClick("div[class^=goback-button]", 1500, () => {
                        console.log("Клик по кнопке 'Назад' выполнен.");
                      });

                      return; // Прерываем дальнейшую обработку
                    }

                    // Ищем первый непройденный подтест (has_attempted: false или user_progress < 100)
                    const availableSubtopic = response.find(
                      (subtopic) =>
                        (subtopic.has_attempted === false &&
                          subtopic.is_published === true) ||
                        (subtopic.user_progress !== undefined &&
                          subtopic.user_progress < 100 &&
                          subtopic.is_published === true)
                    );

                    if (availableSubtopic) {
                      console.log(
                        "Найден непройденный subtopic:",
                        availableSubtopic
                      );

                      // Сохраняем ID и имя выбранного subtopic для дальнейшего использования
                      const subtopicId = availableSubtopic.id;
                      const subtopicName = availableSubtopic.name;

                      console.log(
                        `Будем искать subtopic с ID: ${subtopicId} и именем: ${subtopicName}`
                      );

                      // Ждем, пока DOM обновится
                      setTimeout(() => {
                        // Пробуем разные селекторы для поиска элементов subtopic
                        const subtopicSelectors = [
                          `div[data-id="${subtopicId}"]`,
                          `div[class^="subclasses-name"]:not([class*="disbled-subtopic"])`,
                          `div[class^="subclasses-container"]`,
                        ];

                        let targetElement = null;

                        // Пробуем найти элемент по разным селекторам
                        for (const selector of subtopicSelectors) {
                          const elements = document.querySelectorAll(selector);
                          console.log(
                            `Найдено ${elements.length} элементов по селектору: ${selector}`
                          );

                          // Если нашли элементы, пробуем найти тот, который содержит имя нужного subtopic
                          if (elements.length > 0) {
                            for (const element of elements) {
                              console.log(`Проверяем элемент:`, element);
                              console.log(
                                `Текст элемента: "${element.textContent}"`
                              );

                              if (element.textContent.includes(subtopicName)) {
                                targetElement = element;
                                console.log(
                                  `Найден элемент с текстом, содержащим "${subtopicName}":`,
                                  targetElement
                                );
                                break;
                              }
                            }

                            // Если не нашли по имени, берем первый элемент
                            if (!targetElement && elements.length > 0) {
                              targetElement = elements[0];
                              console.log(
                                `Не найден элемент с нужным именем, берем первый:`,
                                targetElement
                              );
                            }

                            if (targetElement) break;
                          }
                        }

                        if (targetElement) {
                          console.log(
                            "Найден DOM элемент для subtopic:",
                            targetElement
                          );

                          // Ищем кнопку "проходить тест" внутри или рядом с найденным элементом
                          const buttonSelectors = [
                            'button[class^="practice-btn"]',
                            'div[class^="practice-btn"]',
                            'button:contains("проходить тест")',
                            "button",
                            'a[class^="practice-btn"]',
                          ];

                          let practiceButton = null;

                          // Сначала ищем внутри targetElement
                          for (const selector of buttonSelectors) {
                            const buttons =
                              targetElement.querySelectorAll(selector);
                            if (buttons.length > 0) {
                              practiceButton = buttons[0];
                              console.log(
                                `Найдена кнопка внутри элемента по селектору ${selector}:`,
                                practiceButton
                              );
                              break;
                            }
                          }

                          // Если не нашли внутри, ищем в родительском элементе
                          if (!practiceButton && targetElement.parentElement) {
                            for (const selector of buttonSelectors) {
                              const buttons =
                                targetElement.parentElement.querySelectorAll(
                                  selector
                                );
                              if (buttons.length > 0) {
                                practiceButton = buttons[0];
                                console.log(
                                  `Найдена кнопка в родительском элементе по селектору ${selector}:`,
                                  practiceButton
                                );
                                break;
                              }
                            }
                          }

                          // Если все еще не нашли, ищем в документе
                          if (!practiceButton) {
                            // Ищем все кнопки на странице
                            const allButtons = document.querySelectorAll(
                              'button, div[class^="practice-btn"], a[class^="practice-btn"]'
                            );
                            console.log("Все кнопки на странице:", allButtons);

                            // Ищем кнопку, которая находится ближе всего к targetElement
                            let closestButton = null;
                            let minDistance = Infinity;

                            const targetRect =
                              targetElement.getBoundingClientRect();

                            for (const button of allButtons) {
                              const buttonRect = button.getBoundingClientRect();
                              const distance = Math.sqrt(
                                Math.pow(buttonRect.left - targetRect.left, 2) +
                                  Math.pow(buttonRect.top - targetRect.top, 2)
                              );

                              if (distance < minDistance) {
                                minDistance = distance;
                                closestButton = button;
                              }
                            }

                            if (closestButton) {
                              practiceButton = closestButton;
                              console.log(
                                "Найдена ближайшая кнопка:",
                                practiceButton
                              );
                            }
                          }

                          if (practiceButton) {
                            console.log(
                              "Найдена кнопка, кликаем:",
                              practiceButton
                            );
                            setTimeout(() => {
                              practiceButton.click();
                              console.log("Клик выполнен");
                            }, 500);
                          } else {
                            console.log(
                              "Кнопка не найдена, пробуем кликнуть на сам элемент"
                            );
                            targetElement.click();

                            // После клика на элемент, пробуем найти и кликнуть на кнопку
                            setTimeout(() => {
                              const practiceBtn = document.querySelector(
                                'div[class^="practice-btn"], button[class^="practice-btn"]'
                              );
                              if (practiceBtn) {
                                console.log(
                                  "Найдена кнопка после клика на элемент:",
                                  practiceBtn
                                );
                                practiceBtn.click();
                              } else {
                                console.log(
                                  "Кнопка не найдена даже после клика на элемент"
                                );
                              }
                            }, 1000);
                          }
                        } else {
                          console.log(
                            "Не удалось найти DOM элемент для subtopic"
                          );

                          // Пробуем найти любую кнопку "проходить тест" на странице
                          const anyPracticeButton = document.querySelector(
                            'div[class^="practice-btn"], button[class^="practice-btn"]'
                          );
                          if (anyPracticeButton) {
                            console.log(
                              "Найдена кнопка practice на странице:",
                              anyPracticeButton
                            );
                            anyPracticeButton.click();
                          } else {
                            console.log(
                              "Не найдено ни одной кнопки practice на странице"
                            );
                          }
                        }
                      }, 2000); // Увеличиваем задержку до 2 секунд
                    } else {
                      console.log("Все subtopics уже пройдены или недоступны");

                      // Если все пройдены, увеличиваем индекс раздела
                      proxyState.currentTopicIndex++;
                    }
                  }
                } catch (parseError) {
                  console.error(
                    "Ошибка при парсинге ответа от /topics/:",
                    parseError
                  );
                }
              }

              // Оставляем существующую логику для остальных запросов
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
              }

              if (xhr._url && xhr._url.includes("/submit_response/")) {
                const response = JSON.parse(xhr.responseText);
                console.log("got response");
                if (response.title === "RIGHT") {
                  console.log("ответ правильный!");
                  showNotification("Ответ правильный");
                  isAnswersInserted = false;
                  observeAndClick('div[class^="try-button"]', 2500);
                }
              }
            } catch (e) {
              console.error("Ошибка при обработке ответа:", e);
            }
          }

          if (originalOnReadyStateChange) {
            originalOnReadyStateChange.apply(xhr, arguments);
          }
        };

        // Проверяем, является ли запрос отправкой ответа
        if (xhr._url && xhr._url.includes("/submit_response/")) {
          console.log("Перехвачен XHR запрос на submit_response:", xhr._url);

          try {
            // Проверяем, есть ли у нас тело запроса
            if (data) {
              // Парсим тело запроса
              const body = JSON.parse(data);

              // Проверяем, есть ли у нас ответ типа "math" для текущего вопроса
              const questionId = proxyState.questionId;
              console.log("Текущий ID вопроса:", questionId);

              const questionData = answersData[questionId];
              console.log("Данные вопроса:", questionData);

              if (questionData && questionData.answers) {
                const mathAnswer = questionData.answers.find(
                  (answer) => answer.type === "math"
                );

                if (mathAnswer) {
                  console.log("Найден ответ типа math:", mathAnswer);

                  // Форматируем значение для отправки
                  const formattedValue = mathAnswer.values[0];

                  // Модифицируем тело запроса
                  body.user_response = `[[${formattedValue}]]`;
                  body.user_response_ui = [[formattedValue]];

                  console.log("Модифицированный запрос:", body);

                  // Отправляем модифицированный запрос
                  return originalSend.call(this, JSON.stringify(body));
                }
              }
            }
          } catch (e) {
            console.error("Ошибка при перехвате XHR запроса:", e);
            console.error(e.stack);
          }
        }

        // Если не нужно модифицировать запрос, отправляем как есть
        return originalSend.apply(this, arguments);
      };

      return xhr;
    }

    window.XMLHttpRequest = XMLHttpRequestProxy;
  };
})();
