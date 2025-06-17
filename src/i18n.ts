import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  is: {
    translation: {
      nav: {
        home: 'Heim',
        about: 'Um mig',
        services: 'Þjónusta',
        hypnosis: 'Um dáleiðslu',
        book: 'Panta tíma'
      },
      hero: {
        title: 'Umbreyttu lífi þínu með dáleiðslu',
        subtitle: 'Uppgötvaðu kraft undirmeðvitundarinnar',
        cta: 'Panta tíma'
      },
      about: {
        title: 'Um mig',
        content: 'Hef lokið bæði grunnnámi í dáleiðslu og framhaldsnámi í hugrænni endurforritun. Hef brennandi áhuga á því að hjálpa fólki, hvort sem það er að takast á við kvíða og áföll eða einfaldlega til þess að ná betri árangri í leik og starfi.'
      },
      services: {
        title: 'Þjónusta',
        cognitive: {
          title: 'Hugræn endurforritun',
          description: 'Endurforritun hugsunarhætta og hegðunar með því að nálgast undirmeðvitundina. Hjálpar við að brjóta niður neikvæðar myndir og skipta þeim út fyrir jákvæðar.'
        },
        anxiety: {
          title: 'Kvíða-og áfallameðferð',
          description: 'Sérhæfð meðferð fyrir kvíða og áfallaröskun. Hjálpar við að draga úr streitu, kvíða og áfallum með því að nálgast vandamálin á djúpstæðari hátt.'
        },
        performance: {
          title: 'Frammistöðubæting',
          description: 'Bættu árangur þinn í íþróttum, menntun eða starfi með því að nýta fullan möguleika undirmeðvitundarinnar. Hjálpar við að auka fókus, sjálfstraust og frammistöðu.'
        }
      },
      hypnosis: {
        title: 'Um dáleiðslu',
        content: 'Dáleiðsla er náttúrulegt ástand djúps og einbeitingar sem gerir þér kleift að nálgast undirmeðvitundina. Þegar þú ert í dáleiðslu, ertu meðvituð um umhverfið þitt en ert einbeittari og opnari fyrir jákvæðum breytingum. Dáleiðsla er örugg og skilvirk leið til að ná framförum í ýmsum lífsviðfangsefnum.'
      },
      book: {
        title: 'Panta tíma',
        booking_info_prefix: 'Tímabókanir fara fram í gegnum',
        booking_info_middle: 'eða í síma',
        book_now: 'Panta tíma á Noona.is',
        contact_form: 'Hafa samband',
        name: 'Nafn',
        email: 'Netfang',
        message: 'Skilaboð',
        send: 'Senda skilaboð'
      },
      footer: {
        rights: 'Öll réttindi áskilin.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Me',
        services: 'Services',
        hypnosis: 'About Hypnosis',
        book: 'Book'
      },
      hero: {
        title: 'Transform Your Life Through Hypnosis',
        subtitle: 'Discover the power of your subconscious mind and unlock your full potential',
        cta: 'Book a Session'
      },
      about: {
        title: 'About Me',
        content: 'I have completed both basic training in hypnosis and advanced training in cognitive reprogramming. I have a passionate interest in helping people, whether it\'s dealing with anxiety and trauma or simply achieving better results in play and work.'
      },
      services: {
        title: 'Services',
        cognitive: {
          title: 'Cognitive Reprogramming',
          description: 'Reprogramming thought patterns and behaviors by accessing the subconscious. Helps break down negative patterns and replace them with positive ones.'
        },
        anxiety: {
          title: 'Anxiety and Trauma Treatment',
          description: 'Specialized treatment for anxiety and trauma disorders. Helps reduce stress, anxiety, and trauma by addressing issues at a deeper level.'
        },
        performance: {
          title: 'Performance Enhancement',
          description: 'Improve your performance in sports, education, or work by utilizing the full potential of your subconscious. Helps increase focus, confidence, and performance.'
        }
      },
      hypnosis: {
        title: 'About Hypnosis',
        content: 'Hypnosis is a natural state of deep focus and concentration that allows you to access your subconscious mind. When in hypnosis, you are aware of your surroundings but are more focused and open to positive changes. Hypnosis is a safe and effective way to make progress in various life areas.'
      },
      book: {
        title: 'Book a Session',
        booking_info_prefix: 'Bookings are made through',
        booking_info_middle: 'or by phone',
        book_now: 'Book on Noona.is',
        contact_form: 'Contact Form',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      },
      footer: {
        rights: 'All rights reserved.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'is',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 