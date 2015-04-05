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
    {
      id: 'sheila0',
      name: 'Sheila Cockshaw',
      rel: 'alan',
      desc: "Alan's grandmother. Known as Gran Gran by Alan's family."
    },
    {
      id: 'richard',
      name: 'Richard Shaw',
      rel: 'alan',
      desc: "Alan's Dad"
    },
    {
      id: 'tina',
      name: 'Tina Shaw',
      rel: 'alan',
      desc: "Alan's Mum"
    },
    {
      id: 'annie',
      name: 'Anna Dickinson',
      rel: 'alan',
      desc: "Anna is Alan's sister. She's called Annie by Alan and his parents (Tina & Richard)."
    },
    {
      id: 'tony',
      name: 'Tony Dickinson',
      rel: 'alan',
      desc: "Tony is Annie's husband. Annie is Alan's sister."
    },
    {
      id: 'rowan',
      name: 'Rowan Dickinson',
      rel: 'alan',
      desc: "Rowan is Alan's niece, Anna's daughter."
    },
    {
      id: 'roger',
      name: 'Roger Coeshaw',
      rel: 'alan',
      desc: "Roger is Alan's uncle."
    },
    {
      id: 'ruth',
      name: 'Ruth Coeshaw',
      rel: 'alan',
      desc: "Ruth is Roger's wife. Roger is Alan's uncle."
    },
    {
      id: 'joan',
      name: 'Joan Mallett',
      rel: 'lizzy',
      desc: "Lizzy's grandmother, Ian's mother. Ian is Lizzy's Dad. Joan is known as Grandjo to Lizzy's family."
    },
    {
      id: 'ian',
      name: 'Ian Mallett',
      rel: 'lizzy',
      desc: "Lizzy's Dad."
    },
    {
      id: 'ros',
      name: 'Ros Mallett',
      rel: 'lizzy',
      desc: "Lizzy's Mum"
    },
    {
      id: 'katherine',
      name: 'Katherine Mallett',
      rel: 'lizzy',
      desc: "Lizzy's older Sister"
    },
    {
      id: 'sheila1',
      name: 'Sheila Overton',
      rel: 'lizzy',
      desc: "Lizzy's Aunt, Ros's sister. Ros is Lizzy's Mum"
    },
    {
      id: 'michael',
      name: 'Michael Overton',
      rel: 'lizzy',
      desc: "Lizzy's Uncle. Shelia's husband."
    },
    {
      id: 'james',
      name: 'James Overton',
      rel: 'lizzy',
      desc: "Lizzy's cousin."
    },
    {
      id: 'george',
      name: 'George Overton',
      rel: 'lizzy',
      desc: "Lizzy's cousin."
    },
    {
      id: 'kevin',
      name: 'Kevin Dean',
      rel: 'lizzy',
      desc: "George's partner. George is Lizzy's cousin."
    },
    {
      id: 'richardf',
      name: 'Richard Ferrier',
      rel: 'lizzy',
      desc: "Lizzy's cousin."
    },
    {
      id: 'sarah',
      name: 'Sarah Ferrier',
      rel: 'lizzy',
      desc: "Lizzy's cousin."
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