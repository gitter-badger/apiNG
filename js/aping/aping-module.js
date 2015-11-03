"use strict";

var apingApp = angular.module('aping', ['youtube', 'instagram', 'yaru22.angular-timeago', 'linkify']);

function feedEntry(_plattform, _plattform_id) {
    this.plattform = _plattform || false;
    this.plattform_id = _plattform_id || false;
    this.blog_name = false;
    this.blog_id = false;
    this.blog_link = false;
    this.intern_type = false;
    this.type = false;
    this.date = false;
    this.timestamp = false;
    this.post_url = false;
    this.intern_id = false;
    this.text = false;
    this.caption = false;
    this.content = false;
    this.content_url = false;
    this.img_url = false;
    this.img_isSmall = false;
    this.source = false;
    this.tags = false;
    this.tag = false;
}

function plattformEntry(_name, _id) {
    this.name = _name || false;
    this.uniqueId = _id;
    this.intern_id = false;
    this.type = false;
    this.intern_type = false;
    this.ready = false;
    this.avatar_url = false;
    this.feed = false;
    this.title = false;
    this.url = false;
    this.error = false;
    this.configError = false;
    this.noEntries = false;
    this.errorMessage = false;
}