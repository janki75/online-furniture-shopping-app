import { Routes,RouterModule } from '@angular/router';
import { ManagecategoryComponent } from './managecategory/managecategory.component';
import { UpdatecategoryComponent } from './managecategory/updatecategory/updatecategory.component';
import { AddcategoryComponent } from './managecategory/addcategory/addcategory.component';

import { ManagefurnitureComponent } from './managefurniture/managefurniture.component';
import { AddfurnitureComponent } from './managefurniture/addfurniture/addfurniture.component';
import { UpdatefurnitureComponent } from './managefurniture/updatefurniture/updatefurniture.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { AdduserComponent } from './manageuser/adduser/adduser.component';
import { UpdateuserComponent } from './manageuser/updateuser/updateuser.component';
import { OrderComponent } from './order/order.component';
import { UpdateorderComponent } from './order/updateorder/updateorder.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { LoginComponent } from './login/login.component';
import { UpdateOrderDetailComponent } from './order/order-detail/update-order-detail/update-order-detail.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { AddadvertiseComponent } from './advertise/addadvertise/addadvertise.component';
import { UpdateadvertiseComponent } from './advertise/updateadvertise/updateadvertise.component';
import { SigupComponent } from './sigup/sigup.component';
import { FurnituredetailComponent } from './furnituredetail/furnituredetail.component';
import { FurnituredisplayComponent } from './furnituredisplay/furnituredisplay.component';
import { QuickviewfurnitureComponent } from './quickviewfurniture/quickviewfurniture.component';
import { CartComponent } from './cart/cart.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
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
import { FaqComponent } from './faq/faq.component';
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
import { UserAuthguardService } from './user-authguard.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const arr:Routes=[

  {path:'usermenu',component:UsermenuComponent,children:[
    {path:'viewprofile',component:ViewprofileComponent,canActivate:[UserAuthguardService]},
    {path:'editprofile',component:EditprofileComponent,canActivate:[UserAuthguardService]},
    {path:'changepassword',component:ChangepasswordComponent,canActivate:[UserAuthguardService]},
    {path:'',component:UserhomepageComponent,canActivate:[UserAuthguardService]},
    {path:'furnituredisplay/:subCatId',component:FurnituredisplayComponent,canActivate:[UserAuthguardService]},
    {path:'furnituredetail/:furnitureId',component:FurnituredetailComponent,canActivate:[UserAuthguardService]},
    {path:'quickview/:furnitureId',component:QuickviewfurnitureComponent,canActivate:[UserAuthguardService]},
  {path:'cart',component:CartComponent,canActivate:[UserAuthguardService]},
  {path:'viewadvertise',component:SeeAllAdvertiseComponent,canActivate:[UserAuthguardService]},
  {path:'postadvertise',component:PlaceadvertiseComponent,canActivate:[UserAuthguardService]},
  {path:'placeadvertiseform',component:PlaceadvertiseformComponent,canActivate:[UserAuthguardService]},
  {path:'myadvertise',component:MyadvertiseComponent,canActivate:[UserAuthguardService]},
  {path:'payment/:orderId',component:PaymentComponent,canActivate:[UserAuthguardService]},
  {path:'thankyou',component:OrderconfirmationComponent,canActivate:[UserAuthguardService]},
  {path:'ordersummary/:orderId',component:OrdersummaryComponent,canActivate:[UserAuthguardService]},
  {path:'pastorders',component:PastordersComponent,canActivate:[UserAuthguardService]},
  {path:'pastorderdetail/:orderId',component:PastorderdetailComponent,canActivate:[UserAuthguardService]},
  {path:'advertiseDetail/:furnitureAdvId',component:AdvertiseDetailComponent,canActivate:[UserAuthguardService]},
  {path:'faq',component:FaqComponent,canActivate:[UserAuthguardService]},
  {path:'furnitureonrent',component:FurnitureonrentComponent,canActivate:[UserAuthguardService]},
  {path:'furnitureonrentdetail/:furnitureId',component:FurnitureonrentdetailComponent,canActivate:[UserAuthguardService]},
  {path:'terms',component:TermsComponent,canActivate:[UserAuthguardService]},
  {path:'storelocator',component:StorelocatorComponent,canActivate:[UserAuthguardService]},
  {path:'aboutus',component:AboutusComponent,canActivate:[UserAuthguardService]},
  {path:'contactus',component:ContactusComponent,canActivate:[UserAuthguardService]},
  {path:'rentquickview/:furnitureId',component:RentquickviewComponent,canActivate:[UserAuthguardService]},


 ]},

  {path:'',component:LoginComponent},
  {path:'signup',component:SigupComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},

{path:'adminmenu',component:AdminmenuComponent,children:[

     {path:'',component:AdmindashboardComponent},
    {path:'managecategory',component:ManagecategoryComponent,canActivate:[UserAuthguardService]},
  {path:'updatecategory/:id',component:UpdatecategoryComponent,canActivate:[UserAuthguardService]},
  {path:'addcategory',component:AddcategoryComponent,canActivate:[UserAuthguardService]},

  {path:'managefurniture',component:ManagefurnitureComponent,canActivate:[UserAuthguardService]},
  {path:'addfurniture',component:AddfurnitureComponent,canActivate:[UserAuthguardService]},
  {path:'updatefurniture/:id',component:UpdatefurnitureComponent,canActivate:[UserAuthguardService]},
  {path:'manageuser',component:ManageuserComponent,canActivate:[UserAuthguardService]},
  {path:'adduser',component:AdduserComponent,canActivate:[UserAuthguardService]},
  {path:'updateuser/:id',component:UpdateuserComponent,canActivate:[UserAuthguardService]},
  {path:'order',component:OrderComponent,canActivate:[UserAuthguardService]},
  {path:'updateorder/:orderId',component:UpdateorderComponent,canActivate:[UserAuthguardService]},
  {path:'orderDetail/:orderId',component:OrderDetailComponent,canActivate:[UserAuthguardService]},
   {path:'updateOrderDetail/:orderDetailId',component:UpdateOrderDetailComponent,canActivate:[UserAuthguardService]},
  {path:'advertise',component:AdvertiseComponent,canActivate:[UserAuthguardService]},
  {path:'addadvertise',component:AddadvertiseComponent,canActivate:[UserAuthguardService]},
  {path:'updateadvertise/:id',component:UpdateadvertiseComponent,canActivate:[UserAuthguardService]},
  {path:'managesubcategory',component:ManagesubcategoryComponent,canActivate:[UserAuthguardService]},
  {path:'addsubcategory',component:AddsubcategoryComponent,canActivate:[UserAuthguardService]},
  {path:'updatesubcategory/:subCatId',component:UpdatesubcategoryComponent,canActivate:[UserAuthguardService]},


  ]}


];

export const routing=RouterModule.forRoot(arr);
