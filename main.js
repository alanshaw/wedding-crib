/* global jQuery, Handlebars */
(function ($) {

  $('#filter input').change(function () {
    var rel = $(this).data('rel')
    var cols = $('[rel=' + rel + ']').closest('.col')
    var on = $(this).is(':checked')
    if (on)
      cols.show()
    else
      cols.hide()
  })

  Handlebars.registerHelper('ucfirst', function(text) {
    return new Handlebars.SafeString(text[0].toUpperCase() + text.slice(1))
  })

  var data = [
    /*{
      id: 'sheila0',
      name: 'Sheila Cockshaw',
      rel: 'alan',
      shortDesc: "Alan's grandmother",
      longDesc: "Alan's grandmother. Known as Gran Gran by Alan's family."
    },*/
    {
      id: 'richard',
      name: 'Richard Shaw',
      rel: 'alan',
      shortDesc: "Alan's Dad",
      longDesc: "Richard is Alan's Dad"
    },
    {
      id: 'tina',
      name: 'Tina Shaw',
      rel: 'alan',
      shortDesc: "Alan's Mum",
      longDesc: "Tina is Alan's Mum"
    },
    {
      id: 'annie',
      name: 'Anna Dickinson',
      rel: 'alan',
      shortDesc: "Alan's sister",
      longDesc: "Anna is Alan's sister. She's called Annie by Alan and his parents (Tina & Richard)."
    },
    {
      id: 'tony',
      name: 'Tony Dickinson',
      rel: 'alan',
      shortDesc: "Anna's husband",
      longDesc: "Tony is Anna's husband. Anna is Alan's sister."
    },
    {
      id: 'rowan',
      name: 'Rowan Dickinson',
      rel: 'alan',
      shortDesc: "Alan's niece",
      longDesc: "Rowan is Alan's niece, Anna's daughter."
    },
    {
      id: 'roger',
      name: 'Roger Coeshaw',
      rel: 'alan',
      shortDesc: "Alan's uncle",
      longDesc: "Roger is Alan's uncle."
    },
    {
      id: 'ruth',
      name: 'Ruth Kimmins',
      rel: 'alan',
      shortDesc: "Roger's partner",
      longDesc: "Ruth is Roger's partner. Roger is Alan's uncle."
    },
    {
      id: 'joan',
      name: 'Joan Mallett',
      rel: 'lizzy',
      shortDesc: "Lizzy's grandmother",
      longDesc: "Lizzy's grandmother, Ian's mother. Ian is Lizzy's Dad. Joan is known as Grandjo to Lizzy's family."
    },
    {
      id: 'ian',
      name: 'Ian Mallett',
      rel: 'lizzy',
      shortDesc: "Lizzy's Dad",
      longDesc: "Lizzy's Dad. Known as Yanis by Ros (Lizzy's Mum)"
    },
    {
      id: 'ros',
      name: 'Ros Mallett',
      rel: 'lizzy',
      shortDesc: "Lizzy's Mum",
      longDesc: "Lizzy's Mum"
    },
    {
      id: 'katherine',
      name: 'Katherine Potsides',
      rel: 'lizzy',
      shortDesc: "Lizzy's sister",
      longDesc: "Lizzy's older Sister"
    },
    {
      id: 'alex',
      name: 'Alex Potsides',
      rel: 'lizzy',
      shortDesc: "Lizzy's brother-in-law",
      longDesc: "Lizzy's brother-in-law"
    },
    {
      id: 'sheila1',
      name: 'Sheila Overton',
      rel: 'lizzy',
      shortDesc: "Lizzy's aunt",
      longDesc: "Lizzy's aunt, Ros's sister. Ros is Lizzy's Mum"
    },
    {
      id: 'michael',
      name: 'Michael Overton',
      rel: 'lizzy',
      shortDesc: "Lizzy's uncle",
      longDesc: "Lizzy's uncle. Shelia's husband."
    },
    {
      id: 'james',
      name: 'James Overton',
      rel: 'lizzy',
      shortDesc: "Lizzy's cousin.",
      longDesc: "Lizzy's cousin."
    },
    {
      id: 'george',
      name: 'George Overton',
      rel: 'lizzy',
      shortDesc: "Lizzy's cousin.",
      longDesc: "Lizzy's cousin."
    },
    {
      id: 'kevin',
      name: 'Kevin Dean',
      rel: 'lizzy',
      shortDesc: "George's partner.",
      longDesc: "George's partner. George is Lizzy's cousin."
    },
    {
      id: 'richardf',
      name: 'Richard Ferrier',
      rel: 'lizzy',
      shortDesc: "Lizzy's cousin.",
      longDesc: "Lizzy's cousin."
    },
    {
      id: 'sarah',
      name: 'Sarah Ferrier',
      rel: 'lizzy',
      shortDesc: "Lizzy's cousin.",
      longDesc: "Lizzy's cousin."
    },
    {
      id: 'carol',
      name: 'Carol Ferrier',
      rel: 'lizzy',
      shortDesc: "Lizzy's aunt",
      longDesc: "Lizzy's aunt"
    },
    {
      id: 'hugh',
      name: 'Hugh Ferrier',
      rel: 'lizzy',
      shortDesc: "Lizzy's uncle",
      longDesc: "Lizzy's uncle"
    },
    {
      id: 'pamela',
      name: 'Pamela Parkes',
      rel: 'alan',
      shortDesc: "Alan's Mum's cousin",
      longDesc: "Alan's Mum's cousin. Alan's Mum is Tina"
    },
    {
      id: 'andy',
      name: 'Andy Parkes',
      rel: 'alan',
      shortDesc: "Pamela's husband",
      longDesc: "Andy is Pamela's husband. Pamela is Alan's Mum's cousin. Alan's Mum is Tina"
    }
  ]

  data.sort(function (a, b) {
    if (a.id < b.id) {
      return -1
    } else if (a.id > b.id) {
      return 1
    }
    return 0
  })

  var cardTmpl = Handlebars.compile($("#card-tmpl").html())
  var cardsCt = $('#cards')

  var delay = 0

  data.forEach(function (cardData) {
    var card = $(cardTmpl(cardData))
    card.hide()
    cardsCt.append(card)

    if ($('#filter-' + cardData.rel).is(':checked')) {
      setTimeout(card.fadeIn.bind(card), delay)
      delay += 250
    }
  })
})(jQuery)