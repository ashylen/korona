import React from 'react';

// Modules
import styled from 'styled-components';

// Components
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/seo';
import SectionTitle from 'components/simple/SectionTitle/SectionTitle';

const SectionDesc = styled.article`
  max-width: 1440px;
  width: 90%;
  margin: 40px auto 20px;
  line-height: 1.5;
`;

const PrivacyPolicy = () => (
  <MainTemplate>
    <SEO title="Polityka prywatności" />
    <SectionTitle>Polityka prywatności</SectionTitle>
    <SectionDesc>
      Polityka prywatności to dokument informacyjny przedstawiający zasady
      przetwarzania i ochrony danych osobowych w danym np. serwisie, czy też
      sklepie internetowym. Zazwyczaj polityka prywatności stanowi odrębny od
      regulaminu dokument, a niekiedy polityka prywatności stanowi część
      regulaminu. Oba rozwiązania są prawidłowe, aczkolwiek z naszej strony
      zalecamy wydzielenie tej części do osobnego dokumentu, gdyż jest to nie
      tylko bardziej czytelne, ale też związane z pewnymi cechami odróżniającymi
      politykę prywatności od regulaminu. Podstawową różnicą między regulaminem,
      a polityką prywatności jest to, że regulamin stanowi wzorzec umowy, a
      polityka prywatności jedynie dokument informacyjny, tj. zbiór informacji i
      oświadczeń administratora wskazujących sposób i zasady przetwarzania
      danych osobowych. Konsekwencją tego jest np. to, że regulamin może
      podlegać kontroli pod kątem klauzul niedozwolonych, a nie polityka
      prywatności teoretycznie nie. Piszemy teoretycznie, gdyż samo nazwania
      dokumentu polityką prywatności nie powoduje, że nie będzie to wzorzec
      umowy a zawarte w nim postanowienia nie będą stanowić klauzule
      niedozwolone – świadczy o tym chociażby jeden z wpisów w rejestrze
      klauzule niedozwolonych prowadzonym przez Prezesa UOKiK zamieszczony pod
      numerem 5482: „Zastrzegamy sobie prawo do zmian w naszej polityce
      prywatności. Osoby odwiedzające nasz sklep obowiązuje zawsze aktualnie
      obowiązująca jej wersja, dostępna na tej stronie” Administrator danych
      osobowych powinien informować w polityce prywatności przede wszystkim o:
      adresie swojej siedziby i pełnej nazwie, a w przypadku gdy administratorem
      danych jest osoba fizyczna – o miejscu swojego zamieszkania oraz imieniu i
      nazwisku, celu zbierania danych, a w szczególności o znanych mu w czasie
      udzielania informacji lub przewidywanych odbiorcach lub kategoriach
      odbiorców danych, prawie wglądu do swoich danych oraz ich poprawiania,
      dobrowolności albo obowiązku podania danych, a jeżeli taki obowiązek
      istnieje, o jego podstawie prawnej. Powyższe elementy to często kręgosłup
      polityki prywatności, która jest już później dopasowywana do danego
      serwisu, w szczególności w zakresie celów zbierania danych oraz odbiorcach
      i kategoriach odbiorców danych osobowych. Czym jest polityka plików
      Cookies i co powinna zawierać Obowiązki w zakresie plików Cookies wynikają
      z art. 173 Prawa Telekomunikacyjnego z dnia 16 lipca 2004 r. (Dz.U. Nr
      171, poz. 1800 ze zm.). W zasadzie każdy serwis internetowy, czy sklep
      internetowy stosuje pliki Cookies, część z nich jest niezbędna do
      funkcjonowania serwisu/sklepu, część natomiast wspomaga usługodawcę przy
      np. kierowaniu do użytkowników dopasowanych reklam. W związku z tym
      usługodawca powinien zidentyfikować pliki Cookies używane w swoim serwisu
      lub sklepie internetowym, zamieścić informację dot. używanych plików
      Cookies w formie np. polityki Cookies oraz uzyskać zgodę i prawidłowo
      poinformować użytkowników o stosowanych plikach Cookies. Informacja w
      powyższym zakresie może być zamieszczone np. w polityce prywatności albo
      jako odrębny dokument informacyjny. Pod kątem prawnym polityka Cookies ma
      te same cechy co polityka prywatności, różni się jedynie celem i zakresem
      zawartych w niej informacji. Jakie są zagrożenia związane z brakiem
      polityki prywatności albo Cookies Prawidłowe informowanie o sposobie i
      zasadach przetwarzania danych osobowych oraz o plikach Cookies to przede
      wszystkim wyraz dbałości usługodawcy o bezpieczeństwo i prywatność
      użytkowników odwiedzających sklep internetowy. Nie mniej jednak zarówno
      przepisy ustawy o ochronie danych osobowych, jak i przepisy Prawa
      telekomunikacyjnego nakładają określone sankcje za niespełnienie
      obowiązków w tym zakresie. W przypadku danych osobowych kto administrując
      zbiorem danych nie dopełnia obowiązku poinformowania osoby, której dane
      dotyczą, o jej prawach lub przekazania tej osobie informacji
      umożliwiających korzystanie z praw przyznanych jej w niniejszej ustawie,
      podlega grzywnie, karze ograniczenia wolności albo pozbawienia wolności do
      roku. W przypadku plików Cookies jest to ryzyko poniesienia kary
      pieniężnej w wysokości do 3 % przychodu ukaranego podmiotu, osiągniętego w
      poprzednim roku kalendarzowym. Braki informacyjne w tym zakresie mogą być
      również podstawą do uznania przez Prezesa Urzędu Ochrony Konkurencji i
      Konsumentów takiego postępowania za naruszenie zbiorowych interesów
      konsumentów, z czym wiążę się z kolei ryzyko nałożenie kary pieniężnej w
      wysokości do 10 % przychodów za poprzedni rok rozliczeniowy.
    </SectionDesc>
  </MainTemplate>
);

export default PrivacyPolicy;
