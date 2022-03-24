import React from 'react'

export function StyleGuide() {
  return (
    <div>
        <div className="row has-text-left mb-1">
            <h6 className="title p-0 mb-1">first</h6>
            <h6 className="subtitle p-0 my-1 effect-1">layouts</h6> <br />
            <h6 className="heading p-0 my-2 effect-2">goal is not to use css at all</h6>
        </div>
        <div className="row">
            <div className="col one-half">
                <h5 className="subtitle">layout</h5>
                <pre><code>.row .col one-half 
                    </code>
                    <pre><code>four cols, five cols, one-third cols, two thirds cols, one-half cols</code></pre>
    
    
                </pre>
    
    
    
            </div>
    
            <div className="col one-half">
                <h5 className="subtitle">helpers</h5>
                <p className="heading">is-vertical</p>
                <div className="is-vertical">
                    <div className="heading">hi</div>
                    <div className="help">hi</div>
                </div>
                <pre><code>is-vertical</code></pre>
    
                <p className="heading">is-horizontal</p>
                <div className="is-horizontal">
                    <div className="heading">hi</div>
                    <div className="heading">hi</div>
                </div>
                <pre><code>is-horizontal</code></pre>
                <p className="heading">vertical-wrap</p>
    
                <div className="vertical-wrap" style="width: 300px; height: 400px">
    
                    <div className="box">1 <i className="icon icon-diff"></i></div>
                    <div className="box">2<i className="icon icon-highDiff"></i></div>
                    <div className="box">3 <i className="icon icon-medDiff"></i></div>
                    <div className="box">4 <i className="icon icon-lowDiff"></i></div>
                    <div className="box">5 <i className="icon icon-imp"></i></div>
                    <div className="box">6 <i className="icon icon-highImp"></i></div>
                    <div className="box">7 <i className="icon icon-medImp"></i></div>
                    <div className="box">8 <i className="icon icon-lowImp"></i></div>
                </div>
    
                <pre><code>.vertical-wrap (requires height and width)</code></pre>
                <p className="heading">horizontal-wrap</p>
                <div className="horizontal-wrap" style="width: 100px">
    
                    <div className="box">1</div>
                    <div className="box">2</div>
                    <div className="box">3</div>
                    <div className="box">4</div>
                </div>
                <pre><code>.horizontal-wrap (requires width)</code></pre>
            </div>
        </div>
        <div className="fixed-bottom">
            <p className="help">fixed-bottom</p>
        </div>
    
        <div className="fixed-top">
            <p className="help">fixed-top</p>
        </div>
    
        <div className="fixed-left">
            <p className="help">fixed-left</p>
        </div>
    
        <div className="fixed-right">
            <p className="help">fixed-right</p>
        </div>
        <div className="row">
            <div className="col">
                <div className="box">
                    <button className="button">button</button><button className="is-link is-inverted button is-small">effect-1
                        effect-2</button>
                    <button className="button is-inverted effect-1 is-outlined is-small is-info">is-inverted is-info
                        is-outlined
                        effect-1</button>
                    <button className="shadow button is-inverted effect-2 is-outlined is-small is-danger">is-inverted is-danger
                        effect-2</button>
                    <button className="button is-inverted is-small effect-2 is-warning shadow">is-inverted is-warning</button>
                </div>
            </div>
        </div>
    
            <div className="row has-text-left mb-1">
                <h6 className="title p-0 mb-1">second</h6>
                <h6 className="subtitle p-0 my-1 effect-1">layouts</h6> <br />
                <h6 className="heading p-0 my-2 effect-2">goal is not to use css at all</h6>
            </div>
            <div className="divider">layout_center_level</div>
            <nav className="level has-text-centered">
                <div className="level-item">
                    <div>
                        <p className="heading">time
                            <i className="icon icon-focus_modal"></i>
                        </p>
                        <div className="is-size-1 title">00:00</div>
                        <div>
                            <span className="is-size-6 m-0 hover_svg noDisplay">
                                <i className="icon icon-play"></i>
                            </span>
                            <span className="timer-pause is-size-6 m-0 mt-1 hover_svg"><i className="icon icon-pause"></i>
                            </span>
                        </div>
                    </div>
    
                </div>
            </nav>
            <div className="divider">layout_level_two</div>
            <div className="row">
                <nav className="level p-5">
                    <div className="level-left-item has-text-left">
                        <div>
                            <span className="is-size-4">t</span>
                            <p className="help">total tag snippet?</p>
                        </div>
                    </div>
                    <div className="level-right-item has-text-centered">
                        <div>
                            <p className="heading">notify on march 3 2022
                                <i className="icon icon-send"></i>
                            </p>
                            <p className="heading" >ryanyiu@bu.edu<br />lou@mazen.com</p>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="divider">layout_level_three</div>
            <div className="row">
                <nav className="level m-6">
                    <div className="level-left-item has-text-left">
                        <div>
                            first col
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
    
                            <p className="heading">small guy on top</p>
                            <br />
                            <div><button className="button">focus</button></div>
                        </div>
                    </div>
                    <div className="level-right-item has-text-centered">
                        <div>
                            <p className="heading">completed <i className="icon icon-diff"></i></p>
                            <p className="subtitle">4/9</p>
    
                        </div>
                    </div>
                </nav>
            </div>
            <div className="divider">layout_center_item</div>
            <div className="row">
                <nav className="level">
                    <div className="level-left-item has-text-left">
                        <div>
                            <i className="icon icon-previous"></i>
                        </div>
                    </div>
    
                    <div className="level-item">
                        <div>
                            <p className="header">click on me to add task
                            </p>
                        </div>
                    </div>
                    <div className="level-right-item has-text-right">
                        <div>
                            <i className="icon icon-next"></i>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="divider">layout_level_four</div>
            <div className="row">
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">problem <i className="fas fa-lg icon-color fa-puzzle-piece hvr-icon"></i></p>
                            <p className="subtitle">dropdownhere</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">time <i className="fas fa-lg icon-color fa-hourglass-half hvr-icon"></i></p>
                            <p className="subtitle">4/9 </p>
                        </div>
                    </div>
    
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">completed <i className="fas fa-lg icon-color fa-magic hvr-icon"></i></p>
                            <p className="subtitle">4/9</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">notify on march 3 2022 <i className="fas fa-lg icon-color fa-paper-plane hvr-icon"></i></p>
                            <p className="heading">ryanyiu@bu.edu<br />lou@mazen.com</p>
                        </div>
                    </div>
                </nav>
    
            </div>
 </div>
  )
}
