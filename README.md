> 🎯 [*Przygotuj się do rekrutacji w IT*](https://devmentor.pl/p/przygotuj-sie-do-rekrutacji-w-it) to e-book, dzięki któremu odpowiednio zadbasz o **CV**, list motywacyjny, GitHuba czy **profil na LinkedInie**. Dowiesz się również, **jak tworzyć README** do projektów w portfolio.
>
> 🎁 Za udział w tym projekcie otrzymujesz **50% rabatu z kodem FFT50** (~~39 zł~~ -> 19,50 zł)! 

# Sprawdź, czy jesteś gotowy na poszukiwanie pracy!

To zadanie powstało w odpowiedzi na pozytywne reakcje widzów na moje [nagranie na YouTubie](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@), w którym zaproponowałem przygotowanie projektu sprawdzającego gotowość do poszukiwania pracy we front endzie.

## Opis projektu 

> Zwróć uwagę, że będzie to opis wymagań klienta (jego wizja). To Ty powinieneś przekuć je w działającą aplikację.

Twoim klientem jest rekruter IT o imieniu Mirek – jest on tzw. headhunterem czyli osobą, która buduje sieć specjalistów IT i pomaga im w znalezieniu pracy marzeń. Jednocześnie ma kontakty biznesowe, dzięki którym uzyskuje dla „swoich” specjalistów oferty pracy.

Mirek potrzebuje rozwiązania, które pozwoli mu gromadzić informacje o swoich kontaktach w IT (możemy zawęzić je do programistów). Sam nie chce tracić czasu na uzupełnianie tych danych, dlatego każdy z programistów ma mieć swój własny panel, przez który samodzielnie wprowadzi informacje o sobie. Uznajmy na początek, że mają to być informacje podobne do tych dostępnych na [LinkedInie](https://www.linkedin.com/in/mateusz-bogolubow/).

Jednocześnie Mirek ma możliwość dodawania do każdego panelu notatki, która nie będzie widoczna dla programisty.

Mirek potrzebuje też udostępniać informacje o specjalistach (wraz z dodanymi przez niego notatkami) swoim kontaktom biznesowym. Idealnie, gdyby do udostępnienia mógł wybrać naraz kilku programistów. Informacje byłby dla klienta dostępne pod przesłanym przez Mirka adresem po podaniu prawidłowego hasła.


## Wymagania

> Pamiętaj, że często są to technologie, które możesz spotkać w realnej pracy. Jeśli do tej pory nie miałeś z nimi do czynienia, to powinieneś o nich doczytać i je wdrożyć. W pracy raczej nie miałbyś możliwości zmiany tych elementów, gdyż cały zespół musiałby się wówczas do tego dostosować. 

- użyj bibliotekę lub framework – coś, co znasz: React, Vue, Angular,
- wykorzystaj API do przesyłania danych – możesz użyć [JSON Servera](https://github.com/typicode/json-server) lub [Firebase’a](https://firebase.google.com),
- wykorzystaj gotowe środowisko, np. [create-react-app](https://create-react-app.dev), aby ograniczyć czas konfiguracji,
- zaimplementuj rozwiązanie zarządzające stanem, np. w React jest to Redux z rekomendowanym Toolkitem,
- zaimplementuj rozwiązanie wykorzystujące routing, np. w React jest to [React Router](https://reactrouter.com/en/main)
- do stylowania wykorzystaj [Material UI](https://mui.com/material-ui/) lub [Tailwind CSS](https://tailwindcss.com), aby skrócić czas projektowania,
- przygotuj działającą wersję demo na zewnętrznym serwerze, np. [Heroku](https://heroku.com),
- utwórz README.md, w którym zawrzesz pełną informację o tym, jak uruchomić aplikację lokalnie.

## Mile widziane

- wykorzystanie [TypeScriptu](https://www.typescriptlang.org/),
- pokrycie rozwiązania testami ([Jest](https://jestjs.io)/[Testing Library](https://testing-library.com))

## Podsumowanie

Na zadanie masz 40 godzin. W tym czasie musisz przygotować minimalną wersję produktu, którą zaprezentujesz Mirkowi. To będzie moment, w którym zdecyduje on, czy chce dalej realizować z Tobą swój pomysł. 

Tak zorganizuj sobie zadania, aby mieć co Mirkowi pokazać. Jednocześnie musi to być działająca aplikacja. Idealnie, gdybyś mógł udowodnić czas spędzony nad kodowaniem np. przy pomocy aplikacji [Time Camp](https://www.timecamp.com/pl/).

## Jak prawidłowo rozpocząć pracę?

Najpierw zrób tzw. [`fork`](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) (prawy, górny róg strony). W ten sposób utworzysz kopię tego repozytorium na Twoim koncie GitHub. 

Teraz będziesz mógł wykonywać zadanie na swoim repozytorium. Wystarczy, że skopiujesz pliki na komputer przy pomocy komendy [`git clone`](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

Pamiętaj o zapisywaniu historii zmian w plikach przy pomocy komend [`git add`](https://github.com/git-guides/git-add) oraz [`git commit`](https://github.com/git-guides/git-commit).

Aby wysłać dane na zdalny serwer, wystarczy komenda [`git push`](https://github.com/git-guides/git-push).

> :dart: **Uwaga:** Możesz zamieścić wykonany projekt w swoim portfolio, lecz najpierw **nadpisz obecne README**, by nie udostępniać treści zadania. Zobacz, [jak z forka prywatnego repo zrobić własne repozytorium publiczne](https://github.com/devmentor-pl/from-fork-to-own-repo).
