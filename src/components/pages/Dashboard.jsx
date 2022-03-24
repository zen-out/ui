import React from "react";
import {
  Tag_End,
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
  ProgressCard,
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
  TilesHorizData,
  TilesVertData,
  TimelineData,
} from "../1_data";

export function Dashboard() {
  return (
    <div>
      hi
      <div className="row">
        {/* <div className="row" style="min-height: 100vh;"> */}
        <div className="col one">navbar</div>
        <ProgressCard
          percentage="34%"
          end="March 20, 2022"
          table_name="problem"
          start="March 21, 2022"
        />
        <div className="cols eleven">
          <Header title="title" brand="brand" />
          <section className="hero is-default is-bold">
            <div className="hero-head"></div>
            <div className="hero-body">
              {/* Vertical Tile */}
              <div class="tile is-ancestor">
                <data></data>
              </div>
              {/* Vertical Tile */}
            </div>

            <div className="hero-foot">aside</div>
          </section>
        </div>
      </div>
    </div>
  );
}
