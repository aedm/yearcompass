import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {mount} from 'react-mounter';

FlowRouter.route('/', {
  name: "login",
  action() {
    // If a user is logged in, redirect her to the first page
    if (Meteor.loggingIn() || Meteor.userId()) {
      FlowRouter.go("past");
      return;
    }
    mount(App, {content: () => <StartPage />});
  }
});

// Routes which are only visible after logging in
let loggedInRoutes = FlowRouter.group({
  name: "loggedIn",
  triggersEnter: [(context, redirect) => {
    // If a user is not logged in, throw her back to the login page
    if (!Meteor.loggingIn() && !Meteor.userId()) {
      Session.set("loginRedirect", FlowRouter.current().path);
      FlowRouter.go("login");
    }
    window.scrollTo(0, 0);
  }]
});

loggedInRoutes.route('/pastyear', {
  name: "past",
  action() {
    mount(App, {content: () => <PastYearPage />});
  }
});

loggedInRoutes.route('/nextyear', {
  name: "next",
  action() {
    mount(App, {content: () => <NextYearPage />});
  }
});

loggedInRoutes.route('/finish', {
  name: "finish",
  action() {
    mount(App, {content: () => <FinishPage />});
  }
});

loggedInRoutes.route('/feedback', {
  name: "feedback",
  action() {
    mount(App, {content: () => <FeedbackPage />});
  }
});

loggedInRoutes.route('/print', {
  name: "print",
  action() {
    mount(PrintPage);
  }
});

FlowRouter.route('/feedbacktext', {
  name: "feedbacktext",
  action() {
    mount(FeedbackTextsPage);
  }
});

FlowRouter.route('/pdfprint/:userId', {
  name: "pdfprint",
  action(params) {
    mount(PDFPrintPage, {userId: params.userId});
  }
});

