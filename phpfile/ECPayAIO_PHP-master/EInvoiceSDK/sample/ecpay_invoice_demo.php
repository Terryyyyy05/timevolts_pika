<?php
try
{
	$sMsg = '' ;
// 1.載入SDK程式
	include_once('Ecpay_Invoice.php') ;
	$ecpay_invoice = new EcpayInvoice ;
	
// 2.寫入基本介接參數
	$ecpay_invoice->Invoice_Method 			= 'INVOICE' ;
	$ecpay_invoice->Invoice_Url 			= 'https://einvoice-stage.ecpay.com.tw/Invoice/Issue' ;
	$ecpay_invoice->MerchantID 			= '2000132' ;
	$ecpay_invoice->HashKey 			= 'ejCk326UnaZWKisg' ;
	$ecpay_invoice->HashIV 				= 'q9jcZX8Ib9LM8wYk' ;
	
// 3.寫入發票相關資訊
	$aItems	= array();
	// 商品資訊
	array_push($ecpay_invoice->Send['Items'], array('ItemName' => '商品名稱一', 'ItemCount' => 1, 'ItemWord' => '批', 'ItemPrice' => 0, 'ItemTaxType' => 1, 'ItemAmount' => 0, 'ItemRemark' => '商品備註一'  )) ;
	array_push($ecpay_invoice->Send['Items'], array('ItemName' => '商品名稱二', 'ItemCount' => 1, 'ItemWord' => '批', 'ItemPrice' => 150.8, 'ItemTaxType' => 1, 'ItemAmount' => 150.8, 'ItemRemark' => '商品備註二' )) ;
	array_push($ecpay_invoice->Send['Items'], array('ItemName' => '商品名稱二', 'ItemCount' => 1, 'ItemWord' => '批', 'ItemPrice' => 250, 'ItemTaxType' => 1, 'ItemAmount' => 250, 'ItemRemark' => '商品備註三' )) ;
	
	$RelateNumber = 'ECPAY'. date('YmdHis') . rand(1000000000,2147483647) ; // 產生測試用自訂訂單編號
	$ecpay_invoice->Send['RelateNumber'] 			= $RelateNumber ;
	$ecpay_invoice->Send['CustomerID'] 			= '' ;
	$ecpay_invoice->Send['CustomerIdentifier'] 		= '' ;
	$ecpay_invoice->Send['CustomerName'] 			='' ;
	$ecpay_invoice->Send['CustomerAddr'] 			= '' ;
	$ecpay_invoice->Send['CustomerPhone'] 			= '' ;
	$ecpay_invoice->Send['CustomerEmail'] 			= 'test@localhost.com' ;
	$ecpay_invoice->Send['ClearanceMark'] 			= '' ;
	$ecpay_invoice->Send['Print'] 				= '0' ;
	$ecpay_invoice->Send['Donation'] 			= '0' ;
	$ecpay_invoice->Send['LoveCode'] 			= '' ;
	$ecpay_invoice->Send['CarruerType'] 			= '' ;
	$ecpay_invoice->Send['CarruerNum'] 			= '' ;
	$ecpay_invoice->Send['TaxType'] 			= 1 ;
	$ecpay_invoice->Send['SalesAmount'] 			= 401 ;
	$ecpay_invoice->Send['InvoiceRemark'] 			= 'v1.0.190822' ;	
	$ecpay_invoice->Send['InvType'] 			= '07' ;
	$ecpay_invoice->Send['vat'] 				= '' ;
// 4.送出
	$aReturn_Info = $ecpay_invoice->Check_Out();
	
// 5.返回
	foreach($aReturn_Info as $key => $value)
	{
		$sMsg .=   $key . ' => ' . $value . '<br>' ;
	}
}
catch (Exception $e)
{
	// 例外錯誤處理。
	$sMsg = $e->getMessage();
}
echo 'RelateNumber=>' . $RelateNumber.'<br>'.$sMsg ;
?>
