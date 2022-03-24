import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <aside className="menu">
      <ul className="optee_nav menu-list is-align-items-center">
        <div>
          <nav>
            <li>
              {/* <Link to="/signup"> */}
              <a data-tooltip="signup" className="has-tooltip-right">
                <i className="icon icon-signup"></i>
              </a>
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to="/login"> */}
              <a data-tooltip="login" className="has-tooltip-right">
                <i className="icon icon-login"></i>
              </a>
              {/* </Link> */}
            </li>

            <li>
              {/* <Link to="/forgot_pass"> */}
              <a data-tooltip="forgot_pass" className="has-tooltip-right">
                <i className="icon icon-calendar"></i>
              </a>
              {/* </Link> */}
            </li>

            <li>
              {/* <Link to="/"> */}
              <a data-tooltip="dashboard" className="has-tooltip-right">
                <i className="icon icon-home"></i>
              </a>
              {/* </Link> */}
            </li>

            <li>
              {/* <Link to="/calendar"> */}
              <a data-tooltip="calendar" className="has-tooltip-right">
                <i className="icon icon-problem"></i>
              </a>
              {/* </Link> */}
            </li>

            <li>
              {/* <Link to="/tags"> */}
              <a data-tooltip="tags" className="has-tooltip-right">
                <i className="icon icon-tag"></i>
              </a>
              {/* </Link> */}
            </li>
          </nav>
        </div>
      </ul>
    </aside>
  );
}
