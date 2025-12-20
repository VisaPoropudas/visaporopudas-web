'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function CookieConsentComponent() {
  useEffect(() => {
    CookieConsent.run({
      // GDPR-compliant configuration
      guiOptions: {
        consentModal: {
          layout: 'cloud inline',
          position: 'bottom center',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false
        }
      },

      categories: {
        necessary: {
          enabled: true,  // Always enabled
          readOnly: true  // Cannot be disabled
        },
        analytics: {
          enabled: false,
          readOnly: false,
          autoClear: {
            cookies: [
              {
                name: /^(_ga|_gid)/  // Clear Google Analytics cookies
              }
            ]
          }
        },
        marketing: {
          enabled: false,
          readOnly: false
        }
      },

      language: {
        default: 'en',
        autoDetect: 'browser',
        translations: {
          en: {
            consentModal: {
              title: 'We use cookies',
              description: 'This website uses cookies to ensure you get the best experience on our website. You can choose which categories of cookies you want to accept.',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Manage preferences',
              footer: '<a href="/privacy-policy">Privacy Policy</a>'
            },
            preferencesModal: {
              title: 'Cookie Preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Save preferences',
              closeIconLabel: 'Close',
              serviceCounterLabel: 'Service|Services',
              sections: [
                {
                  title: 'Cookie Usage',
                  description: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept all", you consent to our use of cookies.'
                },
                {
                  title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                  description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Analytics Cookies',
                  description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: {
                      name: 'Cookie',
                      domain: 'Domain',
                      description: 'Description',
                      expiration: 'Expiration'
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: location.hostname,
                        description: 'Google Analytics - Used to distinguish users',
                        expiration: '2 years'
                      },
                      {
                        name: '_gid',
                        domain: location.hostname,
                        description: 'Google Analytics - Used to distinguish users',
                        expiration: '24 hours'
                      }
                    ]
                  }
                },
                {
                  title: 'Marketing Cookies',
                  description: 'These cookies are used to track visitors across websites to display relevant advertisements.',
                  linkedCategory: 'marketing'
                },
                {
                  title: 'More information',
                  description: 'For any queries in relation to our policy on cookies and your choices, please <a href="/contact">contact us</a>.'
                }
              ]
            }
          }
        }
      },

      // Callbacks for tracking consent changes
      onFirstConsent: ({ cookie }) => {
        console.log('First consent given:', cookie);
      },

      onConsent: ({ cookie }) => {
        console.log('Consent updated:', cookie);

        // Enable/disable analytics based on consent
        if (cookie.categories.includes('analytics')) {
          // Initialize analytics here (e.g., Google Analytics)
          console.log('Analytics enabled');
        }
      },

      onChange: ({ changedCategories, changedServices }) => {
        console.log('Preferences changed:', changedCategories);

        // Handle preference changes
        if (changedCategories.includes('analytics')) {
          if (CookieConsent.acceptedCategory('analytics')) {
            console.log('Analytics enabled via preferences');
          } else {
            console.log('Analytics disabled via preferences');
          }
        }
      }
    });
  }, []);

  return null; // This component doesn't render anything
}
