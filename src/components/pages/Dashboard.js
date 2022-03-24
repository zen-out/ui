import React from "react";
import {
  Card,
  CardBuilder,
  ChecklistCard,
  DropdownArticle,
  Isotope,
  Message,
  Metis,
  Muuri,
  NavbarDropdown,
  ProgressCard,
  Select,
  SocialCard,
  TimelineItem,
} from "../article";
import {
  FooterData,
  InfoCardData,
  KanbanColumnData,
  ListData,
  MenuData,
  NavHorizData,
  NavVertData,
  PaymentData,
  ScrollCardData,
  TableRowsData,
  SelectData,
  TilesHorizData,
  TilesVertData,
  TimelineData,
} from "../data";
import {
  Button,
  Button_Icon,
  Checkbox_Status_Done,
  Edit_Hourglass_Radio,
  Hamburger,
  Header,
  Hourglass_Dropdown,
  Hourglass_Tags,
  Icon_Add,
  Icon_Delete,
  Icon_Edit,
  Icon_Focus,
  Level_Progress,
  Navbar,
  New_Hourglass_Radio,
  Radio_Edit_Diff,
  Radio_Edit_Imp,
  Radio_Edit_Use,
  Tag,
  Tag_End,
  Tag_Start,
  Timer,
} from "../static";
import {
  CalendarSection,
  HorizontalWrapper,
  ModalSection,
  MuuriSection,
  OwlSection,
  SettingsSection,
  Table,
  TableSection,
  TagsSection,
  VerticalWrapper,
} from "../section";
import {
  InputDate,
  IsotopeBtnWrapper,
  IsotopeFilterBtn,
  IsotopeSortBtn,
  LevelNotify,
  MetisData,
  OwlData,
  Select2,
  TagInput,
} from "../5_libz";
import { AuthLayout, ErrorLayout, MainLayout } from "../6_layouts";
/**********************************************
 *
 * ==================================
 * - [ ]
 ***********************************************/
export function Dashboard() {
  return (
    // <div>
    // hi
    <div class="row">
      {/* <div className="row" style="min-height: 100vh;"> */}
      <div className="col one">
        <Navbar />
      </div>
      <div className="cols eleven">
        <Header title="Dashboard" />
        {/* <section className="hero is-default is-bold"> */}
        {/* <div className="hero-head"></div> */}
        {/* <div className="hero-body"> */}
        <div className="row">
          <div className="col one-half">
            {" "}
            <div class="row">
              <div class="tile">
                <ProgressCard
                  percentage="70%"
                  end="March 27, 2022"
                  start="Dec 1, 2021"
                  table_name="problem"
                />
                <ProgressCard
                  percentage="70%"
                  end="March 27, 2022"
                  start="Dec 1, 2021"
                  table_name="problem"
                />
                <ProgressCard
                  percentage="70%"
                  end="March 27, 2022"
                  start="Dec 1, 2021"
                  table_name="problem"
                />
              </div>
              <div class="tile">
                {" "}
                <InfoCardData
                  table_name="problem"
                  created="Dec 1, 2021"
                  end="March 27, 2022"
                  status=""
                  importance="fa"
                  difficulty=""
                  usefulness=""
                  public=" "
                />
              </div>

              <div class="col one-half"></div>
              {/* </div> */}
              {/* </div> */}

              {/* <div className="hero-foot">aside</div> */}
              {/* </section> */}
            </div>
          </div>

          <div className="col one-half">
            <ScrollCardData />
          </div>
        </div>
      </div>
    </div>
  );
}
