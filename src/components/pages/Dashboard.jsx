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
} from "../1_article";
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
} from "../1_data";
import {
  Tag_End,
  Navbar,
  Tag_Start,
  Button,
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
  New_Hourglass_Radio,
  Radio_Edit_Diff,
  Radio_Edit_Imp,
  Radio_Edit_Use,
  Tag,
} from "../0_static";
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
} from "../4_section";
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
    <div>
      hi
      <div className="row">
        {/* <div className="row" style="min-height: 100vh;"> */}
        <div className="col one">
          <nav />
        </div>
        <ProgressCard
          percentage="34%"
          end="March 20, 2022"
          table_name="problem"
          start="March 21, 2022"
        />
        <div className="cols eleven">
          <Header title="Dashboard" />
          <section className="hero is-default is-bold">
            <div className="hero-head"></div>
            <div className="hero-body">
              {/* Horizontal Tile */}
              {/*   col one */}
              {/* Vertical Tile */}
              <div class="tile is-ancestor">
                <div className="tile is-child">
                  {/* Horizontal Wrapper */}
                  <div className="tile">
                    <article></article>
                  </div>
                  {/* Horizontal Wrapper */}
                  <div className="tile">{/* three cols */}</div>
                  {/* First Row */}
                  {/* Second Row */}
                  <div className="tile"></div>
                  {/* Second Row */}
                </div>
              </div>
              {/* Vertical Tile */}
              {/* col one */}
              {/* col two */}
              <InfoCardData
                table_name="problem"
                created="Dec 1, 2021"
                end="March 27, 2022"
              />

              {/* col two */}
              {/* Horizontal Tile */}
            </div>

            <div className="hero-foot">aside</div>
          </section>
        </div>
      </div>
    </div>
  );
}
