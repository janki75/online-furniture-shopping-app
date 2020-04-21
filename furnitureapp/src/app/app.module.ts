import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonToggleModule,
  MatDatepickerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatPaginatorModule,
  MatTableModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatSortModule, MatToolbarModule, MatSidenavModule, MatListModule, MatNativeDateModule, MatGridListModule, MatCardModule, MatMenuModule, MatTree} from '@angular/material';
import { UpdatecategoryComponent } from './managecategory/updatecategory/updatecategory.component';
import { AddcategoryComponent } from './managecategory/addcategory/addcategory.component';
import { ManagefurnitureComponent } from './managefurniture/managefurniture.component';

import { AddfurnitureComponent } from './managefurniture/addfurniture/addfurniture.component';
import { UpdatefurnitureComponent } from './managefurniture/updatefurniture/updatefurniture.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { AdduserComponent } from './manageuser/adduser/adduser.component';
import { UpdateuserComponent } from './manageuser/updateuser/updateuser.component';
import { OrderComponent } from './order/order.component';
import { UpdateorderComponent } from './order/updateorder/updateorder.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { LoginComponent } from './login/login.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { UpdateOrderDetailComponent } from './order/order-detail/update-order-detail/update-order-detail.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { AddadvertiseComponent } from './advertise/addadvertise/addadvertise.component';
import { UpdateadvertiseComponent } from './advertise/updateadvertise/updateadvertise.component';
import { SigupComponent } from './sigup/sigup.component';
import { FurnituredetailComponent } from './furnituredetail/furnituredetail.component';
import { FurnituredisplayComponent } from './furnituredisplay/furnituredisplay.component';
import { HeaderComponent } from './header/header.component';
import { QuickviewfurnitureComponent } from './quickviewfurniture/quickviewfurniture.component';
import { CartComponent } from './cart/cart.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { CreditcardDirective } from './creditcard.directive';
import { PlaceadvertiseComponent } from './placeadvertise/placeadvertise.component';
import { PlaceadvertiseformComponent } from './placeadvertise/placeadvertiseform/placeadvertiseform.component';
import { SeeAllAdvertiseComponent } from './see-all-advertise/see-all-advertise.component';
import { AdvertiseDetailComponent } from './advertise-detail/advertise-detail.component';
import { MyadvertiseComponent } from './myadvertise/myadvertise.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './viewprofile/editprofile/editprofile.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { PastordersComponent } from './pastorders/pastorders.component';
import { PastorderdetailComponent } from './pastorders/pastorderdetail/pastorderdetail.component';
import { SliderModule } from 'angular-image-slider';
import { FaqComponent } from './faq/faq.component';

import { FooterComponent } from './footer/footer.component';
import { ManagesubcategoryComponent } from './managesubcategory/managesubcategory.component';
import { AddsubcategoryComponent } from './managesubcategory/addsubcategory/addsubcategory.component';
import { UpdatesubcategoryComponent } from './managesubcategory/updatesubcategory/updatesubcategory.component';
import { FurnitureonrentComponent } from './furnitureonrent/furnitureonrent.component';
import { FurnitureonrentdetailComponent } from './furnitureonrentdetail/furnitureonrentdetail.component';
import { TermsComponent } from './terms/terms.component';
import { StorelocatorComponent } from './storelocator/storelocator.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RentquickviewComponent } from './rentquickview/rentquickview.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    ManagecategoryComponent,
    UpdatecategoryComponent,
    AddcategoryComponent,
    ManagefurnitureComponent,

    AddfurnitureComponent,
    UpdatefurnitureComponent,
    AdminmenuComponent,
    ManageuserComponent,
    AdduserComponent,
    UpdateuserComponent,
    OrderComponent,
    UpdateorderComponent,
    OrderDetailComponent,
    LoginComponent,
    UserhomepageComponent,
    UpdateOrderDetailComponent,
    AdmindashboardComponent,
    AdvertiseComponent,
    AddadvertiseComponent,
    UpdateadvertiseComponent,
    SigupComponent,
    FurnituredetailComponent,
    FurnituredisplayComponent,
    HeaderComponent,
    QuickviewfurnitureComponent,
    CartComponent,
    ForgetpasswordComponent,
    PaymentComponent,
    OrderconfirmationComponent,
    CreditcardDirective,
    PlaceadvertiseComponent,
    PlaceadvertiseformComponent,
    SeeAllAdvertiseComponent,
    AdvertiseDetailComponent,
    MyadvertiseComponent,
    UsermenuComponent,
    ChangepasswordComponent,
    ViewprofileComponent,
    EditprofileComponent,
    OrdersummaryComponent,
    PastordersComponent,
    PastorderdetailComponent,
    FaqComponent,

    FooterComponent,
    ManagesubcategoryComponent,
    AddsubcategoryComponent,
    UpdatesubcategoryComponent,
    FurnitureonrentComponent,
    FurnitureonrentdetailComponent,
    TermsComponent,
    StorelocatorComponent,

    AboutusComponent,
    ContactusComponent,
    RentquickviewComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    SliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
