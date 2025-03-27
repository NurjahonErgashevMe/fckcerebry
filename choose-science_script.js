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
          values: [1, 2, 4, 3, 1, 2, 1, 4, 3, 1, 2, 4],
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
          values: [1, 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
        },
      ],
    },
    16742721: {
      // Mavzu 2 Tabiiy resurslar S7
      answers: [
        {
          type: "select",
          values: [1, 2, 2, 1, 1, 2, 1, 2, 1],
        },
      ],
    },
    16742718: {
      // Mavzu 2 S8
      answers: [
        {
          type: "select",
          values: [1, 3, 1, 1, 3, 3, 1, 1, 1, 3, 2, 4, 1],
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
          values: [3, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2],
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
          values: [1, 2, 1, 2, 1, 2],
        },
      ],
    },
    16747885: {
      answers: [
        {
          type: "select",
          values: [3, 1, 2, 3, 2, 1, 2, 1],
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
          values: [2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1],
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
          values: [1, 1, 3, 1, 1, 2, 3, 1, 3, 1, 1, 2, 3, 2, 1],
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
          values: [2, 1, 2, 3, 1, 2, 3],
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

    //2 BOSHQICH
    // УПР 2.1.1
    16953993: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-5", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-3", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-2", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-3", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
          ],
        },
        {
          type: "chooser",
          values: [[0, 2, 4, 5]],
        },
      ],
    },
    //УПР 2.1.2
    16954486: {
      answers: [
        // A
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-5", "target-id": "target2" },
          ],
        },
        // B
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-6", "target-id": "target2" },
          ],
        },
        // C
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
            { "item-id": "drag-3", "target-id": "target3" },
          ],
        },
        // D
        {
          type: "drag",
          values: [{ "item-id": "drag-2", "target-id": "target1" }],
        },
        // E
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
          ],
        },
        // F
        {
          type: "drag",
          values: [{ "item-id": "drag-2", "target-id": "target1" }],
        },
        // G
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-7", "target-id": "target3" },
            { "item-id": "drag-8", "target-id": "target4" },
          ],
        },
      ],
    },

    // УПР 2.1.3
    16956718: {
      answers: [
        // A
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
            { "item-id": "drag-3", "target-id": "target3" },
            { "item-id": "drag-5", "target-id": "target4" },
          ],
        },
        // B
        {
          type: "drag",
          values: [
            { "item-id": "drag-5", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
            { "item-id": "drag-6", "target-id": "target3" },
          ],
        },
        // C
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-1", "target-id": "target3" },
            { "item-id": "drag-2", "target-id": "target4" },
          ],
        },
        // D
        {
          type: "drag",
          values: [
            { "item-id": "drag-6", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
            { "item-id": "drag-1", "target-id": "target3" },
            { "item-id": "drag-4", "target-id": "target4" },
            { "item-id": "drag-10", "target-id": "target5" },
            { "item-id": "drag-7", "target-id": "target6" },
          ],
        },
        // E
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
          ],
        },
      ],
    },

    // УПР 2.1.4
    16956787: {
      answers: [
        // A
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
            { "item-id": "drag-6", "target-id": "target3" },
            { "item-id": "drag-3", "target-id": "target4" },
          ],
        },
        // B
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
          ],
        },
        // C
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
          ],
        },
        // D
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-5", "target-id": "target2" },
          ],
        },
        // E
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-6", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
      ],
    },
    // УПР 2.1.5
    16957540: {
      answers: [
        // (a)
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
          ],
        },
        // (b)
        {
          type: "select",
          values: [1, 1, 1],
        },
        // (c)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
          ],
        },
        // (d)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
        // (e)
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
      ],
    },

    //УПР 2.1.6
    16957455: {
      answers: [
        // (a)
        {
          type: "drag",
          values: [
            { "item-id": "drag-7", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
            { "item-id": "drag-4", "target-id": "target4" },
            { "item-id": "drag-2", "target-id": "target5" },
            { "item-id": "drag-9", "target-id": "target6" },
          ],
        },
        // (b)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
          ],
        },
        // (c)
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-2", "target-id": "target3" },
          ],
        },
        // (d)
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
      ],
    },
    // УПР 2.1.7
    16959124: {
      answers: [
        // (a)
        {
          type: "drag",
          values: [{ "item-id": "drag-3", "target-id": "target1" }],
        },
        // (b)
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
        // (c)
        {
          type: "drag",
          values: [{ "item-id": "drag-3", "target-id": "target1" }],
        },
        // (d)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-2", "target-id": "target3" },
          ],
        },
        // (e)
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
            { "item-id": "drag-2", "target-id": "target4" },
          ],
        },
        // (f)
        {
          type: "drag",
          values: [
            { "item-id": "drag-5", "target-id": "target1" },
            { "item-id": "drag-7", "target-id": "target2" },
            { "item-id": "drag-6", "target-id": "target3" },
            { "item-id": "drag-4", "target-id": "target4" },
          ],
        },
      ],
    },
    // 2.1.8
    16972703: {
      answers: [
        // (a)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
          ],
        },
        // (b)
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
            { "item-id": "drag-3", "target-id": "target3" },
            { "item-id": "drag-4", "target-id": "target4" },
          ],
        },
        // (c)
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
          ],
        },
        // (d)
        {
          type: "drag",
          values: [
            { "item-id": "drag-7", "target-id": "target1" },
            { "item-id": "drag-5", "target-id": "target2" },
            { "item-id": "drag-6", "target-id": "target3" },
            { "item-id": "drag-10", "target-id": "target4" },
            { "item-id": "drag-8", "target-id": "target5" },
            { "item-id": "drag-3", "target-id": "target6" },
            { "item-id": "drag-11", "target-id": "target7" },
          ],
        },
        // (e)
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
          ],
        },
        // (e)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
          ],
        },
      ],
    },
    // 2.1.9
    16958390: {
      answers: [
        // (a) Нет drag-and-drop, предположительно заголовок
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
        // (b)
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" }, // xloroplast
            { "item-id": "drag-2", "target-id": "target2" }, // vakuola
          ],
        },
        // (c)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" }, // xloroplast
          ],
        },
        // (d)
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" }, // vazifasi
            { "item-id": "drag-2", "target-id": "target2" }, // oziq moddalar hosil qilmaydi
          ],
        },
        // (e)
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" }, // chiqib ketganligi
            { "item-id": "drag-2", "target-id": "target2" }, // massasi
            { "item-id": "drag-5", "target-id": "target3" }, // kamayganini
            { "item-id": "drag-7", "target-id": "target4" }, // 10,0
            { "item-id": "drag-8", "target-id": "target5" }, // 9,4
          ],
        },
        // (f)
        {
          type: "text",
          values: ["10,6"],
        },
        // (g)
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" }, // Jo‘mrakdan olingan suv
            { "item-id": "drag-3", "target-id": "target2" }, // A
          ],
        },
      ],
    },
    //2.1.10
    16960046: {
      answers: [
        // (a)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" }, // "bir" для "bir dona azot atomi"
            { "item-id": "drag-3", "target-id": "target2" }, // "ikki" для "ikki kislorod atomi"
          ],
        },
        // (b)
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" }, // "09:00" для "6:00 dan 09:00 gacha"
            { "item-id": "drag-1", "target-id": "target2" }, // "21:00" для "18:00 dan 21:00 gacha"
          ],
        },
        // (c)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" }, // "gavjum vaqtlar" для первой части
            { "item-id": "drag-3", "target-id": "target2" }, // "avtomobillar soni ko‘payadi" для второй части
          ],
        },

        // (d)
        {
          type: "select",
          values: [1, 2, 2],
        },
        // (e)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" }, // 7:00 dan 19:00 gacha
            { "item-id": "drag-3", "target-id": "target2" }, // quyosh nuri
            { "item-id": "drag-5", "target-id": "target3" }, // 7-9
            { "item-id": "drag-6", "target-id": "target4" }, // 6-7
            { "item-id": "drag-8", "target-id": "target5" }, // yuqori
            { "item-id": "drag-9", "target-id": "target6" }, // quyosh nuri mavjud bo'lgan
          ],
        },
        // (f)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" }, // "NO₂" для "Har bir molekula"
            { "item-id": "drag-3", "target-id": "target2" }, // ikkita
            { "item-id": "drag-6", "target-id": "target3" }, // "azot" для "azot atomini hosil qiladi"
            { "item-id": "drag-7", "target-id": "target4" }, // "Ikkita azot" для "Ikkita azot atomi"
            { "item-id": "drag-9", "target-id": "target5" }, // "N₂" для "molekulasini tashkil etadi"
          ],
        },
        // (g)
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" }, // "katta" для "katta sirt yuzasini"
          ],
        },
      ],
    },

    // 2.2.1
    16967395: {
      answers: [
        // (a) elastik kuchi
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" }, // "Elastiklik" для "elastik kuchi"
          ],
        },
        // (b) ishqalanish
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" }, // "Ishqalanish" для "ishqalanish"
          ],
        },
        // (c) <- ishqalanish kuchi (left icon)
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" }, // Первая стрелка (влево) для "ishqalanish kuchi"
          ],
        },
        // (d) prujnali tarozi
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" }, // "Prujinali tarozi" для "prujnali tarozi"
          ],
        },
        // (e) Komila blakdagi ilmoqni prujnali taroziga mahkamlashi mumkin. So‘ngra, u yog‘och blokni stol bo‘ylab tortib, kuch miqdorini prujnali tarozidagi ko‘rsatkichdan ko‘rib olishi mumkin
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" }, // "blokdagi" для "Komila blakdagi"
            { "item-id": "drag-5", "target-id": "target2" }, // "prujinali taroziga mahkamlashi" для "prujnali taroziga mahkamlashi"
            { "item-id": "drag-3", "target-id": "target3" }, // "prujinali tarozidagi ko‘rsatkichdan ko‘rib olishi" для "prujnali tarozidagi ko‘rsatkichdan ko‘rib olishi"
          ],
        },
        // (f) blokning tezligi ortdi
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" }, // "ortdi" для "blokning tezligi ortdi"
          ],
        },
        // (g) Blok silliq sirt (B dan C gacha) bo‘ylab harakatlanganda dag‘al sirtga (A dan B gacha) nisbatan kamroq ishqalanish yuzaga keladi. Harakatga qarshilik qiluvchi kuch kichikroq bo‘lgani sababli, blok silliq sirt bo‘ylab dag‘al sirtga nisbatan tezroq harakatlanadi
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" }, // "silliq sirt" для "Blok silliq sirt (B dan C gacha)"
            { "item-id": "drag-3", "target-id": "target2" }, // "kamroq ishqalanish" для "kamroq ishqalanish yuzaga keladi"
            { "item-id": "drag-2", "target-id": "target3" }, // "Harakatga qarshilik qiluvchi kuch kichikroq bo‘lgani" для "Harakatga qarshilik qiluvchi kuch kichikroq bo‘lgani"
            { "item-id": "drag-6", "target-id": "target4" }, // "silliq sirt" для "blok silliq sirt bo‘ylab"
            { "item-id": "drag-5", "target-id": "target5" }, // "tezroq harakatlanadi" для "tezroq harakatlanadi"
          ],
        },
      ],
    },

    // 2.2.2
    16967986: {
      answers: [
        {
          type: "request",
          values: [
            [[["drag-2"]]],
            [[["drag-3", "drag-1"]]],
            [[["drag-3", "drag-1", "drag-5"]]],
            [["2", "1,5", "2", "1"]],
            [["14,7"]],
            [[["drag-1"]]],
            [[["drag-4", "drag-1", "drag-3"]]],
            [[["drag-2"]]],
          ],
        },
      ],
    },
    // 2.2.3
    16969037: {
      answers: [
        // {
        //   type: "request",
        //   values: [
        //     [[["drag-1", "drag-4"]]],
        //     [[["drag-3", "drag-2", "drag-5"]]],
        //     [[["drag-1", "drag-4", "drag-7", "drag-3", "drag-5"]]],
        //     [[["drag-4", "drag-3", "drag-1"]]],
        //   ],
        // },
        {
          type: "drag",
          values: [
            {
              "item-id": "drag-1",
              "target-id": "target1",
            },
            {
              "item-id": "drag-4",
              "target-id": "target2",
            },
          ],
        },
        {
          type: "drag",
          values: [
            {
              "item-id": "drag-3",
              "target-id": "target1",
            },
            {
              "item-id": "drag-2",
              "target-id": "target2",
            },
            {
              "item-id": "drag-5",
              "target-id": "target3",
            },
          ],
        },
        {
          type: "drag",
          values: [
            {
              "item-id": "drag-1",
              "target-id": "target1",
            },
            {
              "item-id": "drag-4",
              "target-id": "target2",
            },
            {
              "item-id": "drag-7",
              "target-id": "target3",
            },
            {
              "item-id": "drag-3",
              "target-id": "target4",
            },
            {
              "item-id": "drag-5",
              "target-id": "target5",
            },
          ],
        },
        {
          type: "drag",
          values: [
            {
              "item-id": "drag-4",
              "target-id": "target1",
            },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-1", "target-id": "target3" },
          ],
        },
      ],
    },
    // 2.2.4
    16972692: {
      answers: [
        // (a) Quyosh panellarida quyoshdan kelayotgan yorug'lik energiyasi elektr energiyasiga aylantiriladi
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" }, // "yorug‘lik energiyasi" для "quyoshdan kelayotgan"
            { "item-id": "drag-3", "target-id": "target2" }, // "elektr energiyasi" для "elektr energiyasiga"
          ],
        },
        // (b) Radiatsiya
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" }, // "Radiatsiya" для "issiqlik uzatilishining asosiy usuli"
          ],
        },
        // (c) Sariq
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" }, // "Sariq" для "eng maqbul rang"
          ],
        },
        // (d) Sariq rang issiqlik yutilishining eng past foiziga ega. Shu sababli, bino tomonidan yutiladigan issiqlik miqdori eng kam bo'ladi
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" }, // "Sariq" для "Sariq rang"
            { "item-id": "drag-5", "target-id": "target2" }, // "issiqlik yutilishining eng past foiziga" для "issiqlik yutilishining eng past foiziga ega"
            { "item-id": "drag-4", "target-id": "target3" }, // "yutiladigan issiqlik miqdori" для "yutiladigan issiqlik miqdori"
            { "item-id": "drag-6", "target-id": "target4" }, // "kam" для "eng kam bo‘ladi"
          ],
        },
        // (e) Quyosh panellari kengayadi da issiq kun va bu bo'shliqlar panellarning sinmasdan xavfsiz kengayishiga imkon beradi
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" }, // "kengayadi" для "Quyosh panellari kengayadi"
            { "item-id": "drag-2", "target-id": "target2" }, // "issiq kun" для "issiq kun"
            { "item-id": "drag-6", "target-id": "target3" }, // "panellarning sinmasdan xavfsiz kengayishiga imkon beradi" для "panellarning sinmasdan xavfsiz kengayishiga imkon beradi"
          ],
        },
        // (f) Bo'yoq metall qismlar ning namlik va kislorod bilan ta'sirlashishining oldini oladi
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" }, // "metall qismlar" для "metall qismlar ning"
            { "item-id": "drag-5", "target-id": "target2" }, // "namlik va kislorod" для "namlik va kislorod"
            { "item-id": "drag-6", "target-id": "target3" }, // "ta‘sirlashishining" для "bilan ta‘sirlashishining"
            { "item-id": "drag-2", "target-id": "target4" }, // "oldini oladi" для "oldini oladi"
          ],
        },
      ],
    },
    // 2.2.5
    16959585: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-1", "target-id": "target3" },
            { "item-id": "drag-4", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-5", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
            { "item-id": "drag-6", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-7", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
            { "item-id": "drag-5", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
      ],
    },
    // 2.2.6
    16969044: {
      answers: [
        {
          type: "drag",
          values: [{ "item-id": "drag-2", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-1", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
            { "item-id": "drag-8", "target-id": "target4" },
            { "item-id": "drag-9", "target-id": "target5" },
            { "item-id": "drag-3", "target-id": "target6" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-6", "target-id": "target3" },
          ],
        },
      ],
    },
    // 2.2.7
    16969622: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-2", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-2", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
      ],
    },

    // 2.2.8
    16971450: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-3", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" },
            { "item-id": "drag-6", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-2", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-3", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
          ],
        },
      ],
    },

    // 2.2.9
    16972478: {
      answers: [
        {
          type: "request",
          values: [
            [
              [
                [[["drag-2", "drag-4"]]],
                [[["drag-3", "drag-4"]]],
                [[["drag-1"]]],
                [[["drag-2", "drag-3", "drag-5", "drag-7"]]],
                [["1", "4550"]],
                [["1", "2", "1"]],
                [[["drag-1"]]],
                [[["drag-1", "drag-3"]]],
              ],
            ],
          ],
        },
      ],
    },

    // 2.2.10
    16972614: {
      answers: [
        {
          type: "drag",
          values: [{ "item-id": "drag-4", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-6", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-3", "target-id": "target1" }],
        },
        {
          type: "select",
          values: [3, 1, 2, 4],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
            { "item-id": "drag-3", "target-id": "target3" },
          ],
        },
      ],
    },

    // 2.3.1
    16974217: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
            { "item-id": "drag-8", "target-id": "target4" },
            { "item-id": "drag-9", "target-id": "target5" },
            { "item-id": "drag-7", "target-id": "target6" },
            { "item-id": "drag-11", "target-id": "target7" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
            { "item-id": "drag-2", "target-id": "target3" },
            { "item-id": "drag-4", "target-id": "target4" },
            { "item-id": "drag-6", "target-id": "target5" },
          ],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
      ],
    },

    // 2.3.2
    16974256: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-7", "target-id": "target3" },
            { "item-id": "drag-4", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" },
            { "item-id": "drag-7", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-2", "target-id": "target3" },
            { "item-id": "drag-6", "target-id": "target4" },
            { "item-id": "drag-8", "target-id": "target5" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
          ],
        },
      ],
    },
    // 2.3.3
    16974269: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-6", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
            { "item-id": "drag-6", "target-id": "target3" },
            { "item-id": "drag-5", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-5", "target-id": "target2" },
          ],
        },
      ],
    },

    // 2.3.4
    16958570: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-3", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
            { "item-id": "drag-4", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
          ],
        },
      ],
    },

    // 2.2.5
    16959233: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
            { "item-id": "drag-2", "target-id": "target3" },
            { "item-id": "drag-4", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
          ],
        },
      ],
    },

    // 2.2.6
    16974124: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-5", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
            { "item-id": "drag-6", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-5", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
            { "item-id": "drag-2", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
            { "item-id": "drag-3", "target-id": "target3" },
            { "item-id": "drag-4", "target-id": "target4" },
            { "item-id": "drag-6", "target-id": "target5" },
          ],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-6", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
      ],
    },

    // 2.2.7
    16974141: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
            { "item-id": "drag-7", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-4", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-7", "target-id": "target3" },
            { "item-id": "drag-8", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-5", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-1", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-6", "target-id": "target3" },
            { "item-id": "drag-7", "target-id": "target4" },
          ],
        },
      ],
    },

    // 2.2.8
    16974337: {
      answers: [
        {
          type: "request",
          values: [
            [[["drag-1", "drag-4"]]],
            [["32"]],
            [[["drag-1", "drag-2", "drag-5", "drag-7", "drag-8"]]],
            [[["drag-1", "drag-4", "drag-7", "drag-5", "drag-10", "drag-6"]]],
          ],
        },
      ],
    },

    // 2.2.9
    16974394: {
      answers: [
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
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
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-3", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
            { "item-id": "drag-5", "target-id": "target4" },
            { "item-id": "drag-8", "target-id": "target5" },
            { "item-id": "drag-10", "target-id": "target6" },
            { "item-id": "drag-11", "target-id": "target7" },
          ],
        },
      ],
    },

    // 2.2.10
    16957493: {
      answers: [
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-1", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
            { "item-id": "drag-3", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
          ],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-3", "target-id": "target1" },
            { "item-id": "drag-2", "target-id": "target2" },
            { "item-id": "drag-4", "target-id": "target3" },
            { "item-id": "drag-1", "target-id": "target4" },
          ],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-1", "target-id": "target1" }],
        },
        {
          type: "drag",
          values: [
            { "item-id": "drag-2", "target-id": "target1" },
            { "item-id": "drag-4", "target-id": "target2" },
            { "item-id": "drag-3", "target-id": "target3" },
          ],
        },
        {
          type: "drag",
          values: [{ "item-id": "drag-2", "target-id": "target1" }],
        },
      ],
    },
  };

  let isObserverStarted = false; // Флаг для отслеживания запуска наблюдателя

  const handleSubtopics = (subTopics) => {
    // Create observer for subtopics
    const subtopicsObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          // Find all available subtopics
          const allSubtopics = document.querySelectorAll(
            'div[class^="subclasses-name"]'
          );

          // Find first subtopic without progress-bar
          for (let i = 0; i < allSubtopics.length; i++) {
            const subtopic = allSubtopics[i];
            if (subTopics[i]) {
              subtopic.setAttribute("id", subTopics[i].id);

              // Check if progress bar exists
              const isInProgress = subtopic.querySelector(
                'div[class^="user-progress"]'
              );
              if (isInProgress) {
                console.log(
                  `Found subtopic without progress bar, ID: ${subTopics[i].id}`
                );

                // Find practice button
                const practiceButton = subtopic.querySelector(
                  'div[class^="practice-btn"]'
                );

                observeAndClick('div[class^="choose-btn"]', 1000);

                if (practiceButton) {
                  // Click practice button with delay
                  setTimeout(() => {
                    practiceButton.click();
                    console.log(
                      `Clicked practice button for subtopic ${subTopics[i].id}`
                    );
                  }, 1500);
                }

                // Stop after finding first subtopic without progress bar
                return;
              }
            }
          }
        }
      });
    });

    // Start observing document body for subtopic changes
    subtopicsObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial check for subtopics
    const initialSubtopics = document.querySelectorAll(
      'div[class^="subclasses-name"]'
    );
    if (initialSubtopics.length) {
      const event = new MutationRecord();
      event.addedNodes = initialSubtopics;
      subtopicsObserver.callback([event]);
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

  const observeTopicDivs = (onHas, type) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const topicContainer = document.querySelector(
            'div[class^="topic-list-container"]'
          );
          if (topicContainer) {
            const availableTopics = Array.from(
              topicContainer.querySelectorAll(
                'div[class^="topic-main"]:not([class*="topic-disabled"]'
              )
            );
            console.log(availableTopics, "availableTopics");

            if (availableTopics.length > 0) {
              if (availableTopics.length === 3) {
                alert("science закончен!");
              } else {
                // Set currentTopicIndex to last available topic index
                proxyState.currentTopicIndex = availableTopics.length - 1;
                onHas(
                  availableTopics,
                  observer,
                  availableTopics[proxyState.currentTopicIndex]
                );
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
        observeTopicDivs((_, observer, currentTopic) => {
          console.log(currentTopic, "currentTopic");
          currentTopic.style.backgroundColor = "green";
          currentTopic.classList.add("active-topic");

          setTimeout(() => {
            currentTopic.click();
          }, 1000);
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

  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
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
      xhr.send = function (data) {
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
                  console.log("ответ правильный!");
                  showNotification("Ответ правильный");
                  isAnswersInserted = false;
                  observeAndClick('div[class^="try-button"]', 1500);
                }
              } else if (
                xhr._url &&
                xhr._url.includes(
                  `/api/v2/users/student-class/DGHR-SCIENCE-${dynamicSuffix}/chapter/`
                ) &&
                xhr._url.includes("/topics/")
              ) {
                const response = JSON.parse(xhr.responseText);
                // const topics = Array.isArray(response) ? response : [response];
                console.log("Данные о разделах:", response);

                // if (topics.length === 1) {
                //   alert("Доступен только один раздел!");
                // }

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
                  handleSubtopics(response);
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

        // Проверяем, является ли запрос отправкой ответа
        if (xhr._url && xhr._url.includes("/submit_response/")) {
          console.log("Перехвачен XHR запрос на submit_response:", xhr._url);

          try {
            // Проверяем, есть ли у нас тело запроса
            if (data) {
              // Парсим тело запроса
              const body = JSON.parse(data);

              // Проверяем, есть ли у нас ответ типа "request" для текущего вопроса
              const questionId = proxyState.questionId;
              console.log("Текущий ID вопроса:", questionId);

              const questionData = answersData[questionId];
              console.log("Данные вопроса:", questionData);

              if (questionData && questionData.answers) {
                const requestAnswer = questionData.answers.find(
                  (answer) => answer.type === "request"
                );

                if (requestAnswer) {
                  console.log("Найден ответ типа math:", requestAnswer);

                  // Форматируем значение для отправки
                  const formattedValue = requestAnswer.values;

                  // Модифицируем тело запроса
                  body.user_response = JSON.stringify(formattedValue).replace(
                    /"/g,
                    ""
                  );
                  body.user_response_ui = formattedValue;
                  const start = 4000;
                  const end = 7500;
                  const array = Array.from(
                    { length: end - start + 1 },
                    (_, i) => start + i
                  );
                  body.total_time_taken = array.random();
                  // body.time_post_hint = 0;

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
      } else if (answer.type === "text") {
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
      } else if (answer.type === "drag") {
        handleDragDrop(answer.values);
      } else if (answer.type === "chooser") {
        const solutionsForms = document.querySelectorAll(
          ".YwzZU-JBlBsI70aaM6INT"
        );
        answer.values.forEach((formValues, formIndex) => {
          const form = solutionsForms[formIndex];
          if (!form) {
            allInserted = false;
            return;
          }

          const selectedDivs = form.querySelectorAll("div[data-index].active");
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
      }
    });

    return allInserted;
  };

  const processQuestionByType = async (questionData) => {
    if (!questionData || !questionData.answers) return;

    let dragIndex = 0;

    await questionData.answers.forEach((answer, index) => {
      if (answer.type === "request") {
        return;
      }

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
      } else if (answer.type === "text") {
        handleTextInput(answer.values);
      } else if (answer.type === "chooser") {
        handleChooserClick(answer.values);
      } else if (answer.type === "drag") {
        handleDragDrop(answer.values, dragIndex);
        dragIndex++;
      }
    });

    const hasRequestAnswer = questionData.answers.some(
      (answer) => answer.type === "request"
    );

    if (hasRequestAnswer || areAllAnswersInserted(questionData)) {
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
