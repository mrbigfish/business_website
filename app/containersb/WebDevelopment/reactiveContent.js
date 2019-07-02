import React from 'react'
import { 
  Image,
  Grid,
} from 'semantic-ui-react'
import imgA from '../../src/images/react2yrs.jpg'
import imgB from '../../src/images/reactlastmonth.jpg'

const info = [
  {
    menu: {
      title: 'What is React?',
      subtitle: 'What is React and how will this JavaScript Library help you?',
    },
    main: {
      title: 'React in a Nutshell',
      content1: <p>The history, as described in  
        <a href='https://en.wikipedia.org/wiki/React_(JavaScript_library)' 
          target="_blank"> Wikipedia</a>, states that <i>React was created
        by Jordan Walke, a software engineer at Facebook. He was influenced by XHP,
        an HTML component framework for PHP. It was first deployed on Facebook&#39;s
        newsfeed in 2011 and later on Instagram.com in 2012. It was open-sourced
        at JSConf US in May 2013. </i> And finally, on <i>On September 26, 2017, React 
        16.0 was released to the public</i></p>,
      content2: <p>So, how is React going to help me? The first major
        feature that React brings is one-way data binding using props. What this 
        provides, is the ability to separate code into components, passing key
        parameters between parent and child components. If this doesn&#39;t make sense,
        don&#39;t worry. Just know that code becomes easier to manage, allows for scaling,
        and makes code more dynamic.</p>,
      content3: <p>The second major feature React provides is a
        Virtual DOM. What this means to you is that prior to rendering on-screen, 
        React manipulates how things change first. Then, when your stuff is ready
        to render to your client&#39;s screen in the browser, only the changed 
        portion of the DOM is modified. Think of the DOM as a visual map that tells 
        the browser what to display. This makes your web performance blazing fast!</p>,
      content4: <p>The last major feature React provides is lifecycle hooks. Lifecycle 
        hooks provide the ability to perform certain tasks and screen renders, dependent 
        on the life of a component. Again, this is major on many levels. It allows for
        intelligent state-management in your web application.</p>,
      content5: <p>If none of the above makes much sense to you, don&#39;t worry. Just know
        that having a React-based application and website will be responsive, fast, and
        around for a while!</p> ,
    },
  },
  {
    menu: {
      title: 'Longevity?',
      subtitle: 'So, what makes you think React will be around over the next decade?',
    },
    main: {
      title: 'React Continues to Grow!',
      content1: <p>OK great! My Website and Apps are built with the best. But, what
        makes you think React is here to stay? Arguably, the 3 best JavaScript 
        development frameworks for today&#39;s responsive websites and web apps. So, 
        let&#39;s look at developer trends.</p>,
      content2: <p>The following chart shows the number of downloads for each
        framework. Angular and Vue show a steady amount while React shows an
        increase. But that is just the last 2 years. What about right now?</p>,
      content3: <Image src={imgA} centered/>,
      content4: <p>The following shows the latest month of downloads from developers.
        As you can see, React is still showing an increase just this month! Angular
        and Vue are great frameworks, however, React continues to pull new developers
        once they understand the incredible features React provides. Supported by 
        Facebook with continued improvements planned, React is here to stay.
      </p>,
      content5: <Image src={imgB} centered/>,
    },
  },
  {
    menu: {
      title: 'Longevity?',
      subtitle: 'So, what makes you think React will be around over the next decade?',
    },
    main: {
      title: 'Option 3 Title Main Content',
      content: "Here is where I can really talk my head off about menu item 3. Menu item 1 is a very interesting topic to discuss indeed. We must talk and talk about it until your ears basically fall off your own head. Thank you so much for listening!"
    },
  },
  {
    menu: {
      title: 'Longevity?',
      subtitle: 'So, what makes you think React will be around over the next decade?',
    },
    main: {
      title: 'Option 4 Title Main Content',
      content: "Here is where I can really talk my head off about menu item 4. Menu item 1 is a very interesting topic to discuss indeed. We must talk and talk about it until your ears basically fall off your own head. Thank you so much for listening!"
    },
  }
]

export default info