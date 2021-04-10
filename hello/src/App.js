import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet(T-5)'
import Welcome from './components/Welcome(T6)'
import Hello from './components/T8'
import Hello1 from './components/T9'
import Message from './components/Message(T10)'
import Counter from './components/counter(T11)'
import Functionclick from './components/functionclick(T13)'
import Classclick from './components/classclick'
import EventBind from './components/EventBind(T14)'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import { Fragment, PureComponent } from 'react';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Pure1Component from './components/Pure1Component';
import RefsDemo from './components/RefsDemo';
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClcikCounter from './components/ClcikCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import Users from './components/Users';
import CounterTwo from './components/CounterTwo'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext';
function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome/>
      <Hello/>
      <Hello1 name='Teerth Patel' heroname='TT'>
        <p>This is child para </p></Hello1>
      <Hello1 name='Jay Patel' heroname='Jackc'>
        <button>Action</button>
      </Hello1>
      <Hello1 name='Bhargav Patel' heroname='bhagu'/>
      <Hello1 name='Ruturaj Mahida' heroname='Rutu'/>
      <Welcome name='Bhargav Patel' heroname='bhagu'/>
      <Welcome name='Ruturaj Mahida' heroname='Rutu'/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Functionclick/> */}
      {/* <Classclick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline/> */}
      {/* <Form/> */}
      {/* <LifecycleA/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <PureComponent/> */}
      {/* <RefsDemo/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <Hero heroname='Batman'/>
      <Hero heroname='Superman'/>
      <ErrorBoundary>
      <Hero heroname='Joker'/>
      </ErrorBoundary> */}
      {/* <ClcikCounter/> */}
      {/* <HoverCounter/> */}
      {/* <ClickCounterTwo/> */}
      {/* <HoverCounterTwo/> */}
      {/* <Users render={(isLoggedIn) => isLoggedIn ? 'teerth' : 'Guest'} />
      <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <UserProvider value='tirthpatel'>
        <ComponentC />
      </UserProvider> */}
    </div>
  );
}

export default App;
