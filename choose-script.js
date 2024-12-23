(function () {
  "use strict";

  console.log('choose script run')

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

  // Флаг для отслеживания первого запуска
  // let isFirstRun = true;

  const interceptSubmitResponse = () => {
    const XHR = XMLHttpRequest.prototype;
    const send = XHR.send;

    XHR.send = function () {
      this.addEventListener("load", async function () {
        if (this._url.includes("/submit_response/")) {
          try {
            const response = JSON.parse(this.responseText);
            if (response.title === "RIGHT") {
              showNotification("Ответ правильный");
              setTimeout(() => {
                interceptXHRRequests();
                // clickTryButton()
              }, 2000);
            }
          } catch (e) {
            console.error("Ошибка при обработке ответа:", e);
          }
        }
      });
      return send.apply(this, arguments);
    };
  };

  // Основной обработчик для вопросов
  // const processQuestion = (questionId) => {
  //     const questionData = answersData[questionId];
  //     if (!questionData) {
  //         console.error(`Данные для вопроса ID: ${questionId} не найдены`);
  //         detectQuestionType(); // Логируем информацию о типе вопроса
  //         return;
  //     }

  //     processQuestionByType(questionData);
  // };

  const interceptXHRRequests = () => {
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
          if (xhr.readyState === 4 && xhr.status === 200) {
            try {
              if (xhr._url && xhr._url.includes("/next_question/")) {
                const response = JSON.parse(xhr.responseText);
                const questionId = response.question?.id;

                console.log("Перехвачен запрос next_question, ID:", questionId);

                if (questionId && answersData[questionId]) {
                  // isFirstRun = false;
                  console.log("Обработка вопроса:", questionId);
                  setTimeout(() => processQuestion(questionId), 1000);
                }
              } else if (xhr._url && xhr._url.includes("/submit_response/")) {
                const response = JSON.parse(xhr.responseText);
                if (response.title === "RIGHT") {
                  showNotification("Ответ правильный");
                  setTimeout(() => {
                    // Сбрасываем флаг для следующего вопроса
                    // isFirstRun = true;
                    // clickTryButton();
                  }, 2000);
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
    const selects = document.querySelectorAll("select[class^=cerebry_answer_input]");
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

  const processQuestionByType = (questionData) => {
    if (!questionData || !questionData.answers) return;

    let dragIndex = 0; // Индекс для drag элементов

    console.log(questionData.answers, "selectElement");
    questionData.answers.forEach((answer, index) => {
      if (answer.type === "select") {
        const allSelects = document.querySelectorAll(
          "select[class^=cerebry_answer_input]"
        );
        answer.values.forEach((selectIndex, i) => {
          const selectElement = allSelects[i];
          console.log(selectElement, "selectElement");
          if (selectElement) {
            setSelectValue(selectElement, selectIndex);
          }
        });
      } else if (answer.type === "drag") {
        handleDragDrop(answer.values, dragIndex);
        dragIndex++; // Увеличиваем индекс для drag элементов
      }
    });
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

  // Запускаем перехват сразу при загрузке скрипта
  interceptXHRRequests();

  // Экспортируем функции для отладки
  window.logDragItems = logDragItems;

  console.log('choose script end')
})();
