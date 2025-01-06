from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import UnexpectedAlertPresentException
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import requests
import tempfile
import time
import os


def handle_science_choice(driver):
    try:
        print("Ищем элемент SCIENCE...")
        # Ожидаем появления элемента
        element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located(
                (
                    By.XPATH,
                    "//div[starts-with(@class, 'dd-list-item') and contains(text(), 'SCIENCE')]",
                )
            )
        )
        ActionChains(driver).move_to_element(element).click().perform()
    except TimeoutException:
        print("Элемент SCIENCE не найден.")


def choose_subject():
    print("\nВведите, что хотите выбрать: math или science")
    print("math = 1, science = 2")
    choice = input("Ваш выбор: ").strip().lower()

    if choice == "1" or choice == "math":
        return "math"
    elif choice == "2" or choice == "science":
        return "science"
    else:
        print("Некорректный выбор, по умолчанию выбрано math.")
        return "science"


def get_student_credentials():
    """Получает список логинов и паролей из входных данных."""
    print("\nПример правильного формата:")
    print('[{"login":"...","password":"..."}]')

    student_input = input("\nВведите массив с логинами и паролями: ")

    try:
        credentials = eval(student_input)
        if isinstance(credentials, list) and all(
            "login" in cred and "password" in cred for cred in credentials
        ):
            print(f"\nУспешно обработано {len(credentials)} учетных записей!")
            return credentials
        else:
            print(
                "\nНекорректный формат ввода. Убедитесь, что передаете массив объектов с ключами 'login' и 'password'."
            )
            return []
    except Exception as e:
        print(f"\nОшибка обработки ввода: {str(e)}")
        return []
    # return [
    #     {"login": "uzb_414531", "password": "300maktab"},
    #     # {"login": "uzb_593436", "password": "300maktab"},
    #     # {"login": "uzb_593433", "password": "300maktab"},
    #     # {"login": "uzb_593432", "password": "300maktab"},
    #     # {"login": "uzb_593431", "password": "300maktab"},
    # ]


def setup_browser(profile_dir):
    """Настраивает браузер для работы с указанным профилем."""
    chrome_options = Options()
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--disable-extensions")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    # chrome_options.add_argument("--auto-open-devtools-for-tabs")
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")
    chrome_options.add_argument(f"--user-data-dir={profile_dir}")

    service = Service("C:\\chromedriver\\chromedriver.exe")
    return webdriver.Chrome(service=service, options=chrome_options)


def read_js_file(filepath):
    """Читает содержимое JavaScript файла."""
    with open(filepath, "r", encoding="utf-8") as file:
        return file.read()


def clear_cookies(driver):
    """Очищает cookies и localStorage в браузере."""
    driver.delete_all_cookies()


# Функция для приостановки запросов
def enable_request_blocking(driver):
    driver.execute_cdp_cmd("Network.enable", {})
    driver.execute_cdp_cmd("Network.setBlockedURLs", {"urls": ["*"]})


# Функция для возобновления запросов
def disable_request_blocking(driver):
    driver.execute_cdp_cmd("Network.setBlockedURLs", {"urls": []})


def inject_script(driver, script_path):
    """Вставляет JavaScript скрипт в браузер."""
    with open(script_path, "r", encoding="utf-8") as file:
        script_content = file.read()
    driver.execute_script(script_content)


class LocalStorage:
    def __init__(self, driver):
        self.driver = driver

    def __len__(self):
        return self.driver.execute_script("return window.localStorage.length;")

    def items(self):
        return self.driver.execute_script(
            "var ls = window.localStorage, items = {}; "
            "for (var i = 0, k; i < ls.length; ++i) "
            "  items[k = ls.key(i)] = ls.getItem(k); "
            "return items; "
        )

    def keys(self):
        return self.driver.execute_script(
            "var ls = window.localStorage, keys = []; "
            "for (var i = 0; i < ls.length; ++i) "
            "  keys[i] = ls.key(i); "
            "return keys; "
        )

    def get(self, key):
        return self.driver.execute_script(
            "return window.localStorage.getItem(arguments[0]);", key
        )

    def set(self, key, value):
        self.driver.execute_script(
            "window.localStorage.setItem(arguments[0], arguments[1]);", key, value
        )

    def has(self, key):
        return key in self.keys()

    def remove(self, key):
        self.driver.execute_script("window.localStorage.removeItem(arguments[0]);", key)

    def clear(self):
        self.driver.execute_script("window.localStorage.clear();")

    def __getitem__(self, key):
        value = self.get(key)
        if value is None:
            raise KeyError(key)
        return value

    def __setitem__(self, key, value):
        self.set(key, value)

    def __contains__(self, key):
        return key in self.keys()

    def __iter__(self):
        return self.items().__iter__()

    def __repr__(self):
        return self.items().__str__()


def save_script_to_localstorage_from_file(driver, script_path, storage_key):
    """
    Сохраняет JavaScript-код из файла в localStorage с помощью Selenium.

    :param driver: WebDriver Selenium
    :param script_path: Путь к файлу с JavaScript-кодом
    :param storage_key: Ключ для сохранения скрипта в localStorage
    """
    storage = LocalStorage(driver)
    try:
        # Открываем и читаем содержимое файла
        with open(script_path, "r", encoding="utf-8") as file:
            script_content = file.read()

        # Сохраняем в localStorage через Selenium
        storage.set(storage_key, script_content)
        print(f"Скрипт из файла '{script_path}' успешно сохранён в localStorage.")
    except Exception as e:
        print(f"Ошибка при сохранении скрипта: {e}")


def add_observer_script(driver, storage_key, subject_choice=""):
    """Добавляет скрипт для выполнения сохранённого в localStorage кода."""
    observer_script = f"""
    const targetNode = document.body;
    const config = {{ childList: true, subtree: true }};

    const callback = function(mutationsList, observer) {{
        for (let mutation of mutationsList) {{
            if (mutation.type === 'childList') {{
                console.log('MutationObserver сработал');
                const header = document.querySelector('div[class^="dd-header-title"]');
                if (header) {{
                    console.log('DGHR-SCIENCE detected, injecting script from localStorage');
                    observer.disconnect();
                    const statusElement = document.getElementById('status-element');
                    if (statusElement) {{
                        statusElement.remove();
                    }}

                    // Извлекаем скрипт из localStorage и выполняем его
                    const scriptContent = localStorage.getItem('{storage_key}');
                    if (scriptContent) {{
                        const script = document.createElement('script');
                        console.log('вставляем скрипт')
                        script.textContent = scriptContent;
                        document.body.appendChild(script);

                        // Проверяем subject_choice и если science - выполняем клик
                        if ('{subject_choice}' === 'science') {{
                            const scienceElements = document.querySelectorAll("li[class^='dd-list-item']");
                            let scienceFound = false;
                            scienceElements.forEach(element => {{
                                if (element.textContent.includes('SCIENCE')) {{
                                    setTimeout(() => element.click(), 1500);
                                    scienceFound = true;
                                    console.log('Элемент SCIENCE найден и клик выполнен.');
                                }}
                            }});
                            if (!scienceFound) {{
                                console.log('Элемент SCIENCE не найден для клика.');
                            }}
                        }}
                    }} else {{
                        console.error('Скрипт не найден в localStorage');
                    }}
                }} 
                
            }}
        }}
    }};

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    """
    driver.execute_script(observer_script)
    print("Скрипт для отслеживания добавлен.")


def update_status(driver, message):
    """Обновляет статус в элементе body."""
    driver.execute_script(f"""
    let statusElement = document.getElementById('status-element');
    if (!statusElement) {{
        statusElement = document.createElement('div');
        statusElement.id = 'status-element';
        statusElement.style.position = 'fixed';
        statusElement.style.bottom = '10px';
        statusElement.style.right = '10px';
        statusElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        statusElement.style.color = 'white';
        statusElement.style.padding = '15px 20px';
        statusElement.style.borderRadius = '6px';
        statusElement.style.fontSize = '25px';
        document.body.appendChild(statusElement);
    }}
    statusElement.textContent = '{message}';
    """)


def run(users):
    # URL для авторизации
    login_url = (
        "https://staging.sparkbackend.cerebry.co/api/v2/users/login/?language=uzb"
    )
    override_language_url = (
        "https://staging.sparkbackend.cerebry.co/api/v2/users/override_user_language/"
    )

    subject_choice = choose_subject()

    # Открываем браузеры для каждого пользователя
    drivers = []
    for i, user in enumerate(users):
        profile_dir = tempfile.mkdtemp()
        browser = setup_browser(profile_dir)
        browser.get("https://student.cerebry.co")
        drivers.append((browser, user))
        # clear_cookies(browser)

    # Авторизация для каждого пользователя
    for driver, user in drivers:
        ls = LocalStorage(driver)

        ls.clear()
        update_status(driver, "логинимся")
        # add_observer_script(driver)
        enable_request_blocking(driver)

        # Проверка наличия токенов
        cookies = driver.get_cookies()
        jwt_token = next(
            (
                cookie["value"]
                for cookie in cookies
                if cookie["name"] == "cerebry-jwt-token"
            ),
            None,
        )
        jwt_refresh = next(
            (
                cookie["value"]
                for cookie in cookies
                if cookie["name"] == "cerebry-jwt-refresh"
            ),
            None,
        )

        if jwt_token and jwt_refresh:
            print(
                f"Токены уже существуют для пользователя {user['login']}. Пропуск авторизации."
            )
            disable_request_blocking(driver)
            driver.refresh()
            print(f"Вы выбрали : {subject_choice}")
            if subject_choice == "science":
                # Сохраняем science в localStorage
                save_script_to_localstorage_from_file(
                    driver,
                    os.path.join(os.path.dirname(__file__), "choose-science_script.js"),
                    "chooseScienceScript",
                )

                # Выполняем обработку для science
                add_observer_script(driver, "chooseScienceScript", subject_choice)
            else:
                # Сохраняем math в localStorage (по умолчанию)
                save_script_to_localstorage_from_file(
                    driver,
                    os.path.join(os.path.dirname(__file__), "choose-math_script.js"),
                    "chooseMathScript",
                )
                add_observer_script(driver, "chooseMathScript", subject_choice)

            update_status(driver, "загружаем тесты")
        else:
            session = requests.Session()
            response = session.post(
                login_url,
                json={"username": user["login"], "password": user["password"]},
            )

            if response.status_code == 200:
                print(f"Авторизация успешна для пользователя {user['login']}!")
                data = response.json()
                cookies = session.cookies.get_dict()

                # Устанавливаем куки в браузер
                for cookie_name, cookie_value in cookies.items():
                    driver.add_cookie(
                        {
                            "name": cookie_name,
                            "value": cookie_value,
                            # "domain": ".cerebry.co",
                        }
                    )

                # Сохраняем jwt и jwt_refresh в куки
                driver.add_cookie(
                    {
                        "name": "cerebry-jwt-token",
                        "value": data["jwt"],
                        # "domain": ".cerebry.co",
                    }
                )
                driver.add_cookie(
                    {
                        "name": "cerebry-jwt-refresh",
                        "value": data["jwt_refresh"],
                        # "domain": ".cerebry.co",
                    }
                )

                # Проверка языка и отправка запроса на изменение языка, если необходимо
                if data.get("language") != "uz" or data.get("teacher_language") != "uz":
                    update_status(driver, "меняем язык на uz")

                    headers = {"Authorization": f"jwt {data['jwt']}"}
                    response = session.post(
                        override_language_url,
                        json={"override_language": "uz"},
                        cookies=cookies,
                        headers=headers,
                    )
                    if response.status_code == 200 or response.status_code == 201:
                        print("Язык успешно изменен на 'uz'.")
                    else:
                        print(
                            f"Ошибка при изменении языка: {response.status_code}, {response.text}"
                        )
                update_status(driver, "меняем язык")
                disable_request_blocking(driver)
                driver.refresh()
                if subject_choice == "science":
                    # Сохраняем science в localStorage
                    save_script_to_localstorage_from_file(
                        driver,
                        os.path.join(
                            os.path.dirname(__file__), "choose-science_script.js"
                        ),
                        "chooseScienceScript",
                    )
                    # Выполняем обработку для science
                    add_observer_script(driver, "chooseScienceScript", subject_choice)
                else:
                    # Сохраняем math в localStorage (по умолчанию)
                    save_script_to_localstorage_from_file(
                        driver,
                        os.path.join(
                            os.path.dirname(__file__), "choose-math_script.js"
                        ),
                        "chooseMathScript",
                    )
                    add_observer_script(driver, "chooseMathScript", subject_choice)
                update_status(driver, "загружаем тесты")
            else:
                print(
                    f"Ошибка авторизации для пользователя {user['login']}: {response.status_code}, {response.text}"
                )
        time.sleep(5)  # Добавляем задержку перед запуском следующего пользователя

    # Теперь браузеры загружают страницы как авторизованные пользователи
    print("Загрузка завершена.")


if __name__ == "__main__":
    driver = webdriver.Chrome()

    try:
        users = get_student_credentials()
        if not users:
            print("Нет данных пользователей для обработки.")
        else:
            browser = run(users)
            print("\nСкрипты запущены. Для завершения нажмите Enter...")
            input()
    except UnexpectedAlertPresentException as e:
        print(f"\nПроизошла ошибка: {e}")
    except Exception as e:
        print(f"\nПроизошла ошибка: {e}")
    finally:
        if "browser" in locals():
            browser.quit()
