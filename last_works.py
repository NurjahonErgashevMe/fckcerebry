# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.chrome.options import Options
# from selenium.common.exceptions import UnexpectedAlertPresentException
# import requests
# import json
# import re
# import tempfile
# import time
# import os


# def format_json_string(input_str):
#     """Форматирует строку в правильный JSON формат."""
#     input_str = re.sub(r"([{,]\s*)(\w+)(:)", r'\1"\2"\3', input_str)
#     input_str = re.sub(r"'", '"', input_str)
#     input_str = re.sub(r':\s*([^"][^,}\s]+)', r':"\1"', input_str)
#     return input_str


# def get_student_credentials():
#     """Получает список логинов и паролей из входных данных."""
#     print("\nПример правильного формата:")
#     print('[{"login":"uzb_404500","password":"300Maktab9z"}]')
#     print("\nВы также можете ввести без кавычек:")
#     print("[{login:uzb_404500,password:300Maktab9z}]")

#     student_input = input("\nВведите массив с логинами и паролями: ").strip()

#     try:
#         formatted_input = format_json_string(student_input)
#         credentials = json.loads(formatted_input)

#         if isinstance(credentials, list) and all(
#             "login" in cred and "password" in cred for cred in credentials
#         ):
#             print(f"\nУспешно обработано {len(credentials)} учетных записей!")
#             return credentials
#         else:
#             print(
#                 "\nНекорректный формат ввода. Убедитесь, что передаете массив объектов с ключами 'login' и 'password'."
#             )
#             return []
#     except json.JSONDecodeError:
#         print("\nОшибка обработки ввода. Пожалуйста, проверьте формат.")
#         print("Попробуйте ввести данные как в примере выше.")
#         return []
#     except Exception as e:
#         print(f"\nНеожиданная ошибка: {str(e)}")
#         return []


# def setup_browser(profile_dir):
#     """Настраивает браузер для работы с указанным профилем."""
#     chrome_options = Options()
#     chrome_options.add_argument("--disable-gpu")
#     chrome_options.add_argument("--disable-extensions")
#     chrome_options.add_argument("--no-sandbox")
#     chrome_options.add_argument("--disable-dev-shm-usage")
#     chrome_options.add_argument("--disable-blink-features=AutomationControlled")
#     chrome_options.add_argument(f"--user-data-dir={profile_dir}")

#     service = Service("C:\\chromedriver\\chromedriver.exe")
#     return webdriver.Chrome(service=service, options=chrome_options)


# def read_js_file(filepath):
#     """Читает содержимое JavaScript файла."""
#     with open(filepath, "r", encoding="utf-8") as file:
#         return file.read()


# def clear_cookies(driver):
#     """Очищает cookies и localStorage в браузере."""
#     driver.delete_all_cookies()


# # Функция для приостановки запросов
# def enable_request_blocking(driver):
#     driver.execute_cdp_cmd("Network.enable", {})
#     driver.execute_cdp_cmd("Network.setBlockedURLs", {"urls": ["*"]})


# # Функция для возобновления запросов
# def disable_request_blocking(driver):
#     driver.execute_cdp_cmd("Network.setBlockedURLs", {"urls": []})


# def inject_script(driver, script_path):
#     """Вставляет JavaScript скрипт в браузер."""
#     with open(script_path, "r", encoding="utf-8") as file:
#         script_content = file.read()
#     driver.execute_script(script_content)


# class LocalStorage:
#     def __init__(self, driver):
#         self.driver = driver

#     def __len__(self):
#         return self.driver.execute_script("return window.localStorage.length;")

#     def items(self):
#         return self.driver.execute_script(
#             "var ls = window.localStorage, items = {}; "
#             "for (var i = 0, k; i < ls.length; ++i) "
#             "  items[k = ls.key(i)] = ls.getItem(k); "
#             "return items; "
#         )

#     def keys(self):
#         return self.driver.execute_script(
#             "var ls = window.localStorage, keys = []; "
#             "for (var i = 0; i < ls.length; ++i) "
#             "  keys[i] = ls.key(i); "
#             "return keys; "
#         )

#     def get(self, key):
#         return self.driver.execute_script(
#             "return window.localStorage.getItem(arguments[0]);", key
#         )

#     def set(self, key, value):
#         self.driver.execute_script(
#             "window.localStorage.setItem(arguments[0], arguments[1]);", key, value
#         )

#     def has(self, key):
#         return key in self.keys()

#     def remove(self, key):
#         self.driver.execute_script("window.localStorage.removeItem(arguments[0]);", key)

#     def clear(self):
#         self.driver.execute_script("window.localStorage.clear();")

#     def __getitem__(self, key):
#         value = self.get(key)
#         if value is None:
#             raise KeyError(key)
#         return value

#     def __setitem__(self, key, value):
#         self.set(key, value)

#     def __contains__(self, key):
#         return key in self.keys()

#     def __iter__(self):
#         return self.items().__iter__()

#     def __repr__(self):
#         return self.items().__str__()


# def save_script_to_localstorage_from_file(driver, script_path):
#     """
#     Сохраняет JavaScript-код из файла в localStorage с помощью Selenium.

#     :param driver: WebDriver Selenium
#     :param script_path: Путь к файлу с JavaScript-кодом
#     """
#     storage = LocalStorage(driver)
#     try:
#         # Открываем и читаем содержимое файла
#         with open(script_path, "r", encoding="utf-8") as file:
#             script_content = file.read()

#         # Сохраняем в localStorage через Selenium
#         storage.set("chooseScript", script_content)
#         print(f"Скрипт из файла '{script_path}' успешно сохранён в localStorage.")
#     except Exception as e:
#         print(f"Ошибка при сохранении скрипта: {e}")


# def add_observer_script(driver):
#     """Добавляет скрипт для выполнения сохранённого в localStorage кода."""
#     observer_script = """
#     const targetNode = document.body;
#     const config = { childList: true, subtree: true };

#     const callback = function(mutationsList, observer) {
#         for (let mutation of mutationsList) {
#             if (mutation.type === 'childList') {
#                 console.log('MutationObserver сработал');
#                 const header = document.querySelector('div[class^="dd-header-title"]');
#                 if (header) {
#                     console.log('DGHR-SCIENCE-QEFW detected, injecting script from localStorage');
#                     observer.disconnect();

#                     // Извлекаем скрипт из localStorage и выполняем его
#                     const scriptContent = localStorage.getItem('chooseScript');
#                     if (scriptContent) {
#                         const script = document.createElement('script');
#                         script.textContent = scriptContent;
#                         document.head.appendChild(script);
#                     } else {
#                         console.error('Скрипт не найден в localStorage');
#                     }
#                 }
#             }
#         }
#     };

#     const observer = new MutationObserver(callback);
#     observer.observe(targetNode, config);
#     """
#     driver.execute_script(observer_script)
#     print("Скрипт для отслеживания добавлен.")


# def run(users):
#     # URL для авторизации
#     login_url = (
#         "https://staging.sparkbackend.cerebry.co/api/v2/users/login/?language=uzb"
#     )

#     # Открываем браузеры для каждого пользователя
#     drivers = []
#     for i, user in enumerate(users):
#         profile_dir = tempfile.mkdtemp()
#         browser = setup_browser(profile_dir)
#         browser.get("https://student.cerebry.co")
#         drivers.append((browser, user))
#         # clear_cookies(browser)

#     # Авторизация для каждого пользователя
#     for driver, user in drivers:
#         add_observer_script(driver)
#         enable_request_blocking(driver)

#         # Проверка наличия токенов
#         cookies = driver.get_cookies()
#         jwt_token = next(
#             (
#                 cookie["value"]
#                 for cookie in cookies
#                 if cookie["name"] == "cerebry-jwt-token"
#             ),
#             None,
#         )
#         jwt_refresh = next(
#             (
#                 cookie["value"]
#                 for cookie in cookies
#                 if cookie["name"] == "cerebry-jwt-refresh"
#             ),
#             None,
#         )

#         if jwt_token and jwt_refresh:
#             print(
#                 f"Токены уже существуют для пользователя {user['login']}. Пропуск авторизации."
#             )
#             disable_request_blocking(driver)
#             driver.refresh()

#             time.sleep(10)  # Даем время для выполнения скрипта
#             save_script_to_localstorage_from_file(
#                 driver, os.path.join(os.path.dirname(__file__), "choose-script.js")
#             )
#             add_observer_script(driver)
#         else:
#             session = requests.Session()
#             response = session.post(
#                 login_url,
#                 json={"username": user["login"], "password": user["password"]},
#             )

#             if response.status_code == 200:
#                 print(f"Авторизация успешна для пользователя {user['login']}!")
#                 data = response.json()
#                 cookies = session.cookies.get_dict()

#                 # Устанавливаем куки в браузер
#                 for cookie_name, cookie_value in cookies.items():
#                     driver.add_cookie(
#                         {
#                             "name": cookie_name,
#                             "value": cookie_value,
#                             # "domain": ".cerebry.co",
#                         }
#                     )

#                 # Сохраняем jwt и jwt_refresh в куки
#                 driver.add_cookie(
#                     {
#                         "name": "cerebry-jwt-token",
#                         "value": data["jwt"],
#                         # "domain": ".cerebry.co",
#                     }
#                 )
#                 driver.add_cookie(
#                     {
#                         "name": "cerebry-jwt-refresh",
#                         "value": data["jwt_refresh"],
#                         # "domain": ".cerebry.co",
#                     }
#                 )
#                 disable_request_blocking(driver)
#                 driver.refresh()

#                 time.sleep(10)  # Даем время для выполнения скрипта
#                 save_script_to_localstorage_from_file(
#                     driver, os.path.join(os.path.dirname(__file__), "choose-script.js")
#                 )

#                 add_observer_script(driver)
#             else:
#                 print(
#                     f"Ошибка авторизации для пользователя {user['login']}: {response.status_code}, {response.text}"
#                 )
#     # Теперь браузеры загружают страницы как авторизованные пользователи
#     print("Загрузка завершена.")


# if __name__ == "__main__":
#     driver = webdriver.Chrome()

#     try:
#         users = get_student_credentials()
#         if not users:
#             print("Нет данных пользователей для обработки.")
#         else:
#             browser = run(users)
#             print("\nСкрипты запущены. Для завершения нажмите Enter...")
#             input()
#     except UnexpectedAlertPresentException as e:
#         print(f"\nПроизошла ошибка: {e}")
#     except Exception as e:
#         print(f"\nПроизошла ошибка: {e}")
#     finally:
#         if "browser" in locals():
#             browser.quit()


from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import UnexpectedAlertPresentException
import requests
import json
import re
import tempfile
import time
import os


def format_json_string(input_str):
    """Форматирует строку в правильный JSON формат."""
    input_str = re.sub(r"([{,]\s*)(\w+)(:)", r'\1"\2"\3', input_str)
    input_str = re.sub(r"'", '"', input_str)
    input_str = re.sub(r':\s*([^"][^,}\s]+)', r':"\1"', input_str)
    return input_str


def get_student_credentials():
    """Получает список логинов и паролей из входных данных."""
    print("\nПример правильного формата:")
    print('[{"login":"uzb_404500","password":"300Maktab9z"}]')
    print("\nВы также можете ввести без кавычек:")
    print("[{login:uzb_404500,password:300Maktab9z}]")

    student_input = input("\nВведите массив с логинами и паролями: ").strip()

    try:
        formatted_input = format_json_string(student_input)
        credentials = json.loads(formatted_input)

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
    except json.JSONDecodeError:
        print("\nОшибка обработки ввода. Пожалуйста, проверьте формат.")
        print("Попробуйте ввести данные как в примере выше.")
        return []
    except Exception as e:
        print(f"\nНеожиданная ошибка: {str(e)}")
        return []


def setup_browser(profile_dir):
    """Настраивает браузер для работы с указанным профилем."""
    chrome_options = Options()
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--disable-extensions")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
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


def save_script_to_localstorage_from_file(driver, script_path):
    """
    Сохраняет JavaScript-код из файла в localStorage с помощью Selenium.

    :param driver: WebDriver Selenium
    :param script_path: Путь к файлу с JavaScript-кодом
    """
    storage = LocalStorage(driver)
    try:
        # Открываем и читаем содержимое файла
        with open(script_path, "r", encoding="utf-8") as file:
            script_content = file.read()

        # Сохраняем в localStorage через Selenium
        storage.set("chooseScript", script_content)
        print(f"Скрипт из файла '{script_path}' успешно сохранён в localStorage.")
    except Exception as e:
        print(f"Ошибка при сохранении скрипта: {e}")


def add_observer_script(driver):
    """Добавляет скрипт для выполнения сохранённого в localStorage кода."""
    observer_script = """
    const targetNode = document.body;
    const config = { childList: true, subtree: true };

    const callback = function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log('MutationObserver сработал');
                const header = document.querySelector('div[class^="dd-header-title"]');
                if (header) {
                    console.log('DGHR-SCIENCE-QEFW detected, injecting script from localStorage');
                    observer.disconnect();

                    // Извлекаем скрипт из localStorage и выполняем его
                    const scriptContent = localStorage.getItem('chooseScript');
                    if (scriptContent) {
                        const script = document.createElement('script');
                        script.textContent = scriptContent;
                        document.head.appendChild(script);
                    } else {
                        console.error('Скрипт не найден в localStorage');
                    }
                }
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    """
    driver.execute_script(observer_script)
    print("Скрипт для отслеживания добавлен.")


def run(users):
    # URL для авторизации
    login_url = (
        "https://staging.sparkbackend.cerebry.co/api/v2/users/login/?language=uzb"
    )

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
        add_observer_script(driver)
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

            time.sleep(10)  # Даем время для выполнения скрипта
            save_script_to_localstorage_from_file(
                driver, os.path.join(os.path.dirname(__file__), "choose-script.js")
            )
            add_observer_script(driver)
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
                disable_request_blocking(driver)
                driver.refresh()

                time.sleep(10)  # Даем время для выполнения скрипта
                save_script_to_localstorage_from_file(
                    driver, os.path.join(os.path.dirname(__file__), "choose-script.js")
                )

                add_observer_script(driver)
            else:
                print(
                    f"Ошибка авторизации для пользователя {user['login']}: {response.status_code}, {response.text}"
                )
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
