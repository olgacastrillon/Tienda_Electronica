<?php
// Config File
require 'config.php';
// fpdf lib
require('lib/fpdf/fpdf.php');

class PDF extends FPDF
{
// Page header
function Header()
{
    // Logo
    //$this->Image('logo.png',10,6,30);
    // Arial bold 15
    $this->SetFont('Arial','B',15);
    // Move to the right
    $this->Cell(80);
    // Title
    $this->Cell(30,10,'Informe Inventario',0,0,'C');
    // Line break
    $this->Ln(20);
}

// Page footer
function Footer()
{
    // Position at 1.5 cm from bottom
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Page number
    $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
}

// Instanciation of inherited class
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Arial','',12);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id, code, name, brand, price, quantity, reg_date FROM $table";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
    	$pdf->SetFont('Arial','B',12);
    	$pdf->Cell(0,5,utf8_decode('Producto: '.$row["id"]),0,1);
    	$pdf->SetFont('Arial','',12);
    	$pdf->Cell(0,5,utf8_decode('Código: '.$row["code"]),0,1);
    	$pdf->Cell(0,5,utf8_decode('Nombre: '.$row["name"]),0,1);
    	$pdf->Cell(0,5,utf8_decode('Marca: '.$row["brand"]),0,1);
    	$pdf->Cell(0,5,utf8_decode('Precio: '.$row["price"]),0,1);
    	$pdf->Cell(0,5,utf8_decode('Cantidad: '.$row["quantity"]),0,1);
    	$pdf->Cell(0,5,utf8_decode('Ultima actualización: '.$row["reg_date"]),0,1);
    	$pdf->Ln(5);
    }
} else {
    echo "0 results";
}
$conn->close();

// Data loading

$pdf->Output();
?>