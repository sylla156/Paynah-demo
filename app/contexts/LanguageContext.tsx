"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type TranslationsType = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: TranslationsType = {
  en: {
    home: "Home",
    products: "Products",
    cart: "Cart",
    search: "Search",
    addToCart: "Add to cart",
    remove: "Remove",
    total: "Total",
    checkout: "Checkout",
    language: "Language",
    signIn: "Sign In",
    signOut: "Sign Out",
    adminDashboard: "Admin Dashboard",
    date: "Date",
    amount: "Amount",
    status: "Status",
    actions: "Actions",
    refund: "Refund",
    completed: "Completed",
    pending: "Pending",
    refunded: "Refunded",
    clientInfo: "Client Info",
    product: "Product",
    mobileMoneyOperator: "Mobile Money Operator",
    welcomeAdmin: "Welcome, {name}!",
    invalidEmail: "Please enter a valid email address",
    checkoutAndPayment: "Checkout and Payment",
    fullName: "Full Name",
    email: "Email",
    country: "Country",
    selectCountry: "Select a country",
    paymentProvider: "Payment Provider",
    selectProvider: "Select a provider",
    phoneNumber: "Phone Number",
    totalToPay: "Total to Pay",
    processing: "Processing...",
    pay: "Pay",
    paymentSuccess: "Payment successful!",
    paymentFailed: "Payment failed. Please try again.",
    paymentError: "An error occurred during payment. Please try again.",
    confirmPayment: "Confirm Payment",
    waveConfirmationInstructions:
      "Please click the link below to confirm your payment with Wave:",
    clickToConfirm: "Click here to confirm payment",
    orangeConfirmationInstructions:
      "Please enter the OTP sent to your phone to confirm your Orange Money payment:",
    enterOTP: "Enter OTP",
    confirmOTP: "Confirm OTP",
    mtnConfirmationInstructions:
      "Please confirm the payment in your MTN Mobile Money app, then click the button below:",
    iHaveConfirmed: "I have confirmed the payment",
    mobileMoneyConfirmationInstructions:
      "Please confirm the payment in your mobile money app.",
    enterEmail: "Enter your email address",
    confirmRefund: "Confirm Refund",
    refundConfirmationDescription:
      "Please review and confirm the refund details below:",
    refundSuccessful: "Refund processed successfully",
    refundFailed: "Refund failed. Please try again.",
    createTransfer: "Create Transfer",
    enterTransferDetails: "Enter transfer details",
    provider: "Provider",
    confirmTransfer: "Confirm Transfer",
    transferSuccessful: "Transfer processed successfully",
    transferFailed: "Transfer failed. Please try again.",
    countriesFetchedSuccess: "Countries list fetched successfully",
    countriesFetchError: "Error fetching countries list",
    pleaseAllFields: "Please fill in all fields",
    incoming: "Incoming",
    providersFetchedSuccess: "Providers list fetched successfully",
    providersFetchError: "Error fetching providers list",
    invalidTransferDetails:
      "Invalid transfer details. Please check all fields.",
    paymentCreating: "Payment is being created...",
    enterOtpToConfirm: "Enter OTP to confirm the transaction",
    clickLinkToConfirm: "Click on the link to confirm the transaction",
    confirmTransactionOnYourEnd: "Please confirm the transaction on your end",
    paymentCompleted: "Payment completed successfully",
    paymentStatus: "Payment Status",
    confirmationLink: "Confirmation Link",
    paymentSuccessTitle: "Payment Successful",
    paymentSuccessDescription:
      "Your transaction has been completed successfully.",
    paymentFailureTitle: "Payment Failed",
    paymentFailureDescription:
      "We're sorry, but there was an issue processing your payment.",
    transactionId: "Transaction ID",
    errorMessage: "Error",
    returnHome: "Return to Home",
    returnToCheckout: "Return to Checkout",
    password: "Password",
    enterPassword: "Enter your password",
    signingIn: "Signing In...",
  },
  fr: {
    home: "Accueil",
    products: "Produits",
    cart: "Panier",
    search: "Rechercher",
    addToCart: "Ajouter au panier",
    remove: "Supprimer",
    total: "Total",
    checkout: "Passer à la caisse",
    language: "Langue",
    signIn: "Se connecter",
    signOut: "Se déconnecter",
    adminDashboard: "Tableau de bord administrateur",
    date: "Date",
    amount: "Montant",
    status: "Statut",
    actions: "Actions",
    refund: "Rembourser",
    completed: "Terminé",
    pending: "En attente",
    refunded: "Remboursé",
    clientInfo: "Informations client",
    product: "Produit",
    mobileMoneyOperator: "Opérateur de Mobile Money",
    welcomeAdmin: "Bienvenue, {name} !",
    invalidEmail: "Veuillez entrer une adresse e-mail valide",
    checkoutAndPayment: "Validation et Paiement",
    fullName: "Nom complet",
    email: "Email",
    country: "Pays",
    selectCountry: "Sélectionnez un pays",
    paymentProvider: "Fournisseur de paiement",
    selectProvider: "Sélectionnez un fournisseur",
    phoneNumber: "Numéro de téléphone",
    totalToPay: "Total à payer",
    processing: "Traitement en cours...",
    pay: "Payer",
    paymentSuccess: "Paiement réussi !",
    paymentFailed: "Le paiement a échoué. Veuillez réessayer.",
    paymentError:
      "Une erreur s'est produite lors du paiement. Veuillez réessayer.",
    confirmPayment: "Confirmer le paiement",
    waveConfirmationInstructions:
      "Veuillez cliquer sur le lien ci-dessous pour confirmer votre paiement avec Wave :",
    clickToConfirm: "Cliquez ici pour confirmer le paiement",
    orangeConfirmationInstructions:
      "Veuillez entrer le code OTP envoyé à votre téléphone pour confirmer votre paiement Orange Money :",
    enterOTP: "Entrer le code OTP",
    confirmOTP: "Confirmer le code OTP",
    mtnConfirmationInstructions:
      "Veuillez confirmer le paiement dans votre application MTN Mobile Money, puis cliquez sur le bouton ci-dessous :",
    iHaveConfirmed: "J'ai confirmé le paiement",
    mobileMoneyConfirmationInstructions:
      "Veuillez confirmer le paiement dans votre application de mobile money.",
    enterEmail: "Entrez votre adresse e-mail",
    confirmRefund: "Confirmer le remboursement",
    refundConfirmationDescription:
      "Veuillez vérifier et confirmer les détails du remboursement ci-dessous :",
    refundSuccessful: "Remboursement traité avec succès",
    refundFailed: "Le remboursement a échoué. Veuillez réessayer.",
    createTransfer: "Créer un transfert",
    enterTransferDetails: "Entrez les détails du transfert",
    provider: "Fournisseur",
    confirmTransfer: "Confirmer le transfert",
    transferSuccessful: "Transfert traité avec succès",
    transferFailed: "Le transfert a échoué. Veuillez réessayer.",
    countriesFetchedSuccess: "Liste des pays récupérée avec succès",
    countriesFetchError: "Erreur lors de la récupération de la liste des pays",
    pleaseAllFields: "Veuillez remplir tous les champs",
    incoming: "À venir",
    providersFetchedSuccess: "Liste des fournisseurs récupérée avec succès",
    providersFetchError:
      "Erreur lors de la récupération de la liste des fournisseurs",
    invalidTransferDetails:
      "Détails de transfert invalides. Veuillez vérifier tous les champs.",
    paymentCreating: "Le paiement est en cours de création...",
    enterOtpToConfirm: "Entrez le code OTP pour confirmer la transaction",
    clickLinkToConfirm: "Cliquez sur le lien pour confirmer la transaction",
    confirmTransactionOnYourEnd:
      "Veuillez confirmer la transaction de votre côté",
    paymentCompleted: "Paiement effectué avec succès",
    paymentStatus: "Statut du paiement",
    confirmationLink: "Lien de confirmation",
    paymentSuccessTitle: "Paiement Réussi",
    paymentSuccessDescription: "Votre transaction a été effectuée avec succès.",
    paymentFailureTitle: "Échec du Paiement",
    paymentFailureDescription:
      "Nous sommes désolés, mais il y a eu un problème lors du traitement de votre paiement.",
    transactionId: "ID de Transaction",
    errorMessage: "Erreur",
    returnHome: "Retour à l'Accueil",
    returnToCheckout: "Retour au Paiement",
    password: "Mot de passe",
    enterPassword: "Entrez votre mot de passe",
    signingIn: "Connexion en cours...",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string, params?: Record<string, string>) => {
    let translation = translations[language][key] || key;
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{${param}}`, value);
      });
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
