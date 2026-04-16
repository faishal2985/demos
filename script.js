/* ══════════════════════════════════════
   script.js — Cynosure ESS Dashboard
   Requires: jQuery 3.x, Bootstrap 5
   ══════════════════════════════════════ */

$(function () {

  /* ════════════════════════════════════
     SIDEBAR TOGGLE (Mobile)
     ════════════════════════════════════ */
  $('#btnToggleSidebar').on('click', function () {
    $('#sidebar').toggleClass('open');
    $('#sidebar-overlay').toggleClass('show');
  });

  $('#sidebar-overlay').on('click', function () {
    $('#sidebar').removeClass('open');
    $(this).removeClass('show');
  });

  /* ════════════════════════════════════
     ANIMATED COUNTERS
     ════════════════════════════════════ */
  $('[data-count]').each(function () {
    const $el    = $(this);
    const target = +$el.data('count');

    $({ val: 0 }).animate({ val: target }, {
      duration: 900,
      easing: 'swing',
      step: function () { $el.text(Math.ceil(this.val)); },
      complete: function () { $el.text(target); }
    });
  });

  /* ════════════════════════════════════
     DATA
     ════════════════════════════════════ */

  /* -- To-Do items -- */
  const todos = [
    { title: 'Design Task Management ...', sub: "Task Management  •  By: Deepa Ma'am", freq: 'Daily',   star: true  },
    { title: 'Design Wire frame',          sub: 'Task Management  •  By: Gourav sir',  freq: 'Weekly',  star: false },
    { title: 'Scope Document',             sub: 'Task Management  •  By: Gourav sir',  freq: 'Monthly', star: false },
    { title: 'Document Creation',          sub: 'Task Management  •  By: Gourav sir',  freq: 'Yearly',  star: false },
  ];

  /* -- Meetings -- */
  const meetings = [
    { title: 'Team Stand-up Meeting',          time: '09:15 AM – 09:15 AM', dur: '70 min' },
    { title: 'Discussion with Client',         time: '10:30 PM – 11:15 AM', dur: '70 min' },
    { title: 'Interview Front end Developer',  time: '11:30 AM – 01:00 PM', dur: '70 min' },
  ];

  /* -- Ongoing Projects -- */
  const projects = [
    {
      name: 'Update Employee Contact ..',
      desc: 'Ensure all employee contact details are up-to-date in the ESS portal. This includes phone numbers...',
      time: '09:30 PM – 10:00 AM',
      progress: 62, color: 'var(--primary)',
      tasks: 12, activities: 86,
      avatars: ['VM', 'DS', 'KR']
    },
    {
      name: 'Approve Leave Requests',
      desc: 'Review and approve pending leave applications submitted via the ESS portal. Ensure leave...',
      time: '09:30 PM – 10:00 AM',
      progress: 100, color: 'var(--success)',
      tasks: 12, activities: 86,
      avatars: ['SA', 'PK']
    },
    {
      name: 'Generate Monthly Attendance Report',
      desc: 'Compile and review monthly attendance data for all employees...',
      time: '10:00 AM – 12:00 PM',
      progress: 40, color: 'var(--accent)',
      tasks: 8, activities: 42,
      avatars: ['GR']
    },
  ];

  /* -- Tasks in Review -- */
  const taskReviews = [
    { title: 'Design Task Management ...',  sub: "Submitted Yesterday  •  To: Deepa Ma'am", status: 'Submitted' },
    { title: 'Design Wire frame',           sub: 'Submitted Yesterday  •  To: Gourav sir',  status: 'Submitted' },
    { title: 'Scope Document',              sub: 'Submitted Yesterday  •  To: Gourav sir',  status: 'Submitted' },
    { title: 'Document Creation',           sub: 'Submitted Yesterday  •  To: Gourav sir',  status: 'Submitted' },
    { title: 'User Experience Research',    sub: "Submitted Today  •  To: Deepa Ma'am",     status: 'In Review' },
    { title: 'Prototype Development',       sub: 'Submitted Today  •  To: Adhya sir',       status: 'In Review' },
    { title: 'Usability Testing Report',    sub: "Submitted Today  •  To: Deepa Ma'am",     status: 'In Review' },
    { title: 'Design System Documentation', sub: 'Submitted Today  •  To: Gourav sir',      status: 'Submitted' },
  ];

  /* -- Feed -- */
  const feedItems = [
    {
      date: 'Thursday, 26 Jun',
      items: [
        { title: 'New Task Assigned', body: 'You have been assigned a new task by Ramesh pandey (Team Lead) in the...', meta: 'By: Ramesh Pandey | 12:32', unread: true  },
        { title: 'New Task Assigned', body: 'You have been assigned a new task by Ramesh pandey (Team Lead) in the...', meta: 'By: Ramesh Pandey | 12:32', unread: true  },
      ]
    },
    {
      date: 'Wednesday, 25 Jun',
      items: [
        { title: 'Travel management reached a Milestone', body: 'Agenda of the meeting will be come here and also share your thoughts on th...', meta: 'System generated | 12:32', unread: false, image: '🎉' },
      ]
    },
    {
      date: 'Tuesday, 24 Jun',
      items: [
        { title: 'Task Approved',                  body: 'Your AppXchange task has been approved.',          meta: "By: Xammie Ma'am | 14:17", unread: false },
        { title: 'You were added in a Project',    body: 'You have been added in Task management Project',   meta: 'By: Gautav sir | 14:17',   unread: false },
      ]
    },
    {
      date: 'Wednesday, 23 Jun',
      items: [
        { title: 'Task Approved', body: 'Your AppXchange task has been approved.', meta: "By: Xammie Ma'am | 14:17", unread: false },
      ]
    },
  ];

  /* ════════════════════════════════════
     RENDER: TO-DO LIST
     ════════════════════════════════════ */
  const freqClass = {
    Daily:   'freq-daily',
    Weekly:  'freq-weekly',
    Monthly: 'freq-monthly',
    Yearly:  'freq-yearly'
  };

  todos.forEach(function (t) {
    const starClass = t.star
      ? 'bi-star-fill todo-star active'
      : 'bi-star todo-star';

    $('#todo-list').append(`
      <div class="todo-item">
        <i class="bi ${starClass}"></i>
        <div class="todo-info">
          <div class="todo-title">${t.title}</div>
          <div class="todo-sub">${t.sub}</div>
        </div>
        <span class="freq-badge ${freqClass[t.freq]}">${t.freq}</span>
      </div>
    `);
  });

  /* ════════════════════════════════════
     RENDER: MEETINGS
     ════════════════════════════════════ */
  meetings.forEach(function (m) {
    $('#meeting-list').append(`
      <div class="meeting-item">
        <div>
          <div class="meeting-title">${m.title}</div>
          <div class="meeting-time"><i class="bi bi-clock"></i> ${m.time}</div>
        </div>
        <div class="duration-badge"><i class="bi bi-stopwatch"></i> ${m.dur}</div>
      </div>
    `);
  });

  /* ════════════════════════════════════
     RENDER: ONGOING PROJECTS
     ════════════════════════════════════ */
  projects.forEach(function (p) {
    const avs         = p.avatars.map(a => `<div class="av">${a}</div>`).join('');
    const statusLabel = p.progress === 100 ? 'Complete' : 'Progress';

    $('#projects-list').append(`
      <div class="project-card">
        <div class="project-name">${p.name}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-time"><i class="bi bi-clock"></i> ${p.time}</div>
        <div class="progress-wrap">
          <div class="progress-label">
            <span>${statusLabel}</span>
            <span>${p.progress}%</span>
          </div>
          <div class="progress">
            <div class="progress-bar" style="width:${p.progress}%;background:${p.color}"></div>
          </div>
        </div>
        <div class="d-flex align-items-center mt-2">
          <div class="avatar-stack">${avs}</div>
          <div class="proj-meta ms-auto">
            <i class="bi bi-list-task"></i> ${p.tasks} tasks
            &nbsp;
            <i class="bi bi-activity"></i> ${p.activities} Activities
          </div>
        </div>
      </div>
    `);
  });

  /* ════════════════════════════════════
     RENDER: TASKS IN REVIEW
     ════════════════════════════════════ */
  taskReviews.forEach(function (t) {
    const cls = t.status === 'Submitted' ? 'status-submitted' : 'status-in-review';

    $('#tasks-review-list').append(`
      <div class="task-review-item">
        <div>
          <div class="task-r-title">${t.title}</div>
          <div class="task-r-sub">${t.sub}</div>
        </div>
        <span class="status-badge ${cls}">${t.status}</span>
      </div>
    `);
  });

  /* ════════════════════════════════════
     RENDER: FEED
     ════════════════════════════════════ */
  function renderFeed(filter) {
    const $fc = $('#feed-container').empty();

    feedItems.forEach(function (group) {
      let groupHtml = `<div class="feed-date-label">${group.date}</div>`;

      group.items.forEach(function (item) {
        if (filter === 'unread' && !item.unread) return;

        const dot = item.unread ? '<span class="unread-dot"></span>' : '';
        const img = item.image  ? `<div class="feed-image">${item.image}</div>` : '';

        groupHtml += `
          <div class="feed-item">
            <div class="feed-item-title">${dot}${item.title}</div>
            <div class="feed-item-body">${item.body}</div>
            ${img}
            <div class="feed-item-meta">${item.meta}</div>
          </div>`;
      });

      $fc.append(groupHtml);
    });
  }

  /* Initial render */
  renderFeed('all');

  /* ════════════════════════════════════
     EVENT LISTENERS
     ════════════════════════════════════ */

  /* Feed tab switch */
  $(document).on('click', '.feed-tab-btn', function () {
    $('.feed-tab-btn').removeClass('active');
    $(this).addClass('active');
    renderFeed($(this).data('tab'));
  });

  /* Star toggle on To-Do */
  $(document).on('click', '.todo-star', function () {
    $(this).toggleClass('bi-star bi-star-fill active');
  });

  /* Sidebar nav active state */
  $('.nav-item-s').on('click', function () {
    $('.nav-item-s').removeClass('active');
    $(this).addClass('active');
  });

});
