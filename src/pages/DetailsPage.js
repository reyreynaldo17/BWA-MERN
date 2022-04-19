import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import Featuredimage from "parts/Featuredimage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import Activities from "parts/Activities";

import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details page";
    window.scrollTo(0, 0);
    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }

  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) return null;
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={page[match.params.id]}
        ></PageDetailTitle>
        <Featuredimage data={page[match.params.id].imageId}></Featuredimage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade botton>
                <PageDetailDescription
                  data={page[match.params.id]}
                ></PageDetailDescription>
              </Fade>
            </div>
            <div className="col-5">
              <Fade botton>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                ></BookingForm>
              </Fade>
            </div>
          </div>
        </section>

        <Activities data={page[match.params.id].activityId}></Activities>
        <Testimony data={page[match.params.id].testimonial}></Testimony>

        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
