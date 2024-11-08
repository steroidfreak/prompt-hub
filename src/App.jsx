import React from 'react';
import { Router, Route, Switch } from 'wouter';
import PromptSubmissionForm from './components/PromptSubmissionForm.jsx';
import PromptDisplayAndVoting from './components/PromptDisplayAndVotingComponent.jsx';
// import ModelComparisonInterface from './components/ModelComparisonInterface.jsx';
import PopularityCharts from './components/PopularityCharts.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/submit-prompt" component={PromptSubmissionForm} />
        <Route path="/prompts" component={PromptDisplayAndVoting} />
        {/* <Route path="/compare-models" component={ModelComparisonInterface} /> */}
        <Route path="/popularity-charts" component={PopularityCharts} />
        <Route path="/" component={PromptDisplayAndVoting} />
      </Switch>
    </Router>
  );
}

export default App;