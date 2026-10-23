param([string]$Dest)
# Downloads the company's project images from the public Google Drive folder (anyone-with-link) via the standard
# download endpoint. confirm=t is Drive's own "download anyway" for files too large to virus-scan.
$ErrorActionPreference = 'Continue'
$items = @(
  @('basak-evler-intaya','01','1gQynRVqXEJgoxMACczky8tp1L1AzEctq','jpg'),
  @('basak-evler-intaya','02','1ki95yfIRYXBUdJH7JPf1KXehy-IA3unL','jpg'),
  @('basak-evler-intaya','03','19hV_RgHryvTQepPN8BJhxQqq1rPCd52i','jpg'),
  @('basak-evler-intaya','04','1-Ncbw52Gx0iCWXb07nSvDr8c4GfW01qt','jpg'),
  @('basaksehir-avrasya-konutlari-cadde','01','1Vqp_AtWcBqLTctBg4hcxMWg6WKe586lA','jpg'),
  @('basaksehir-avrasya-konutlari-cadde','02','1-Uf3hE1rjMTwP636BADKi19Jc3KeJMBf','jpg'),
  @('basaksehir-avrasya-konutlari-cadde','03','1lLAKYfk-qopioUYj6EJapZlY9peZLH3n','jpg'),
  @('basaksehir-avrasya-konutlari-cadde','04','1VfIDLbbi79e4lPCojRDk1gBCCv1oOrq5','jpg'),
  @('basaksehir-avrasya-konutlari-cadde','05','1GRfFwMoA7aStrnXpKHvcuVWUIuQB_7md','jpg'),
  @('bizim-evler-10','01','1nl8NKJlyGnPQwpTQewzE2ZvjmKYE-SjY','jpg'),
  @('bizim-evler-10','02','1oogyqFGcJ3BmJ08O25TR8eTmDe0NqXw8','jpg'),
  @('bizim-evler-12','01','1vy1QoZjgI8ThjJBuGMZQ-AQOVdUWzLB-','jpg'),
  @('bizim-evler-12','02','10KxdJvM0RnbfSSgNeSTuSzMV2y37uqFo','jpg'),
  @('bizim-evler-12','03','1hRsmsD0uEe_m6CqsCN4kn18khFcHvWVD','jpg'),
  @('bizim-evler-12','04','14BAIhgt0KiICtMyKemSWqpTp03iSLZLT','jpg'),
  @('buyukyali-istanbul','01','1beqINyUM5TBB-A7RYdo3MC1-dbNs5Nw2','jpg'),
  @('buyukyali-istanbul','02','12kS8gMPJuOWgixovOpJOFnkPwcXqxIIm','jpg'),
  @('buyukyali-istanbul','03','1YdJvveZ4Mq0Atyz4L9GODZuaCmV4aP86','jpg'),
  @('buyukyali-istanbul','04','1ZDQQ83ajmejlUG_kAao-VJo0SRMEX16A','jpg'),
  @('deniz-istanbul','01','10m_WuA1wPPK5-rKWpDfmqXnJixhbzT-E','jpg'),
  @('deniz-istanbul','02','1zVA4RwraQ_8Uz41T0-fIagZprfH_wWeN','jpg'),
  @('deniz-istanbul','03','10deEDvVPuF0UqKuKMavUwGBTM_c_nXAQ','jpg'),
  @('deniz-istanbul','04','1rbrSRZfL7U1Or9TKqYrYXhOtQ_o2_tlk','jpg'),
  @('deniz-istanbul','05','1cW0D7x5Bf1Ex5_CjPytu3TfEGlBPHHlT','jpg'),
  @('deniz-istanbul','06','1h5POEQqWz4Y4-rz_t2cT6jOk_6PlVkEy','jpg'),
  @('referans-beylikduzu','01','1cTBtui62Wx_YiGhlo20ncs16GCGCz3Gz','tiff'),
  @('referans-beylikduzu','02','1B3gLkdRphU_kjMUwapsQsg00bOetih0U','jpg'),
  @('referans-beylikduzu','03','1kb-bhZxOjNANnODWlV5xWdG_KeCdShJs','jpg'),
  @('referans-beylikduzu','04','1Yzk4FQesgUlgxF4jSUifYIYGo8doxM2-','jpg'),
  @('referans-beylikduzu','plan','1dysxnGvf_wGUAMTJe0maQYO-jtWzHwUG','tiff'),
  @('topkapi-29','01','1EOrp3J1Y0PkLfMANsgzxj5xHcBZx3FKz','tif'),
  @('topkapi-29','02','1vkIX7zDmYQp9OLrsFPvXNHgPKSDC80N1','jpg'),
  @('topkapi-29','03','1WwmBBO5adwol6mLs5vPSKRUDvetYa_DI','jpg'),
  @('mavera-boutique','01','1rc1_s977AvnZ6z7sxSNS3UEc0Uz5rUnJ','jpg'),
  @('mavera-boutique','02','1BDTR5khzMUF8Vy12HB54pJIGVlSTcBfK','jpg'),
  @('mavera-boutique','03','11uGKlunWYUVwHogq2yq-pYRnBRK2avHw','jpg'),
  @('mavera-boutique','04','1kKHgfGv-34Tz9gccR1fFRmMJMO0GYOjm','jpg'),
  @('mavera-boutique','05','192TmkvzAmozs605AlEQV-KPP3CL8TnCx','jpg'),
  @('yedi-mavi','01','1KuYbOTzbFmS8HOfd2xpjW05kncmjXqLE','jpg'),
  @('yedi-mavi','02','151EXnoDfwj4txji2Y3dE6nK0-tCBC8xu','jpg'),
  @('yedi-mavi','03','11Bl7m6SGVg-8vJ8Fi8iqdrNmkKDhssL5','jpg'),
  @('yedi-mavi','04','1xYAvpK_rPhjBCxvsye-qnGCwTIQ5oivF','jpg'),
  @('yedi-mavi','05','1A3bmSpfznTWeeeCNqoJFkb4fYxv7cvrU','jpg'),
  @('yedi-mavi','06','1CtOR3jABW0zK678EC9AKqNm4ZdJ2cizP','jpg'),
  @('yedi-mavi','07','1qcux9Jz-Fl_IUqIP5nH11JptrlDy5Lje','png'),
  @('yedi-mavi','08','12720WjifIj4lJp6ROujBicw5dXed1l4u','png'),
  @('bahcekent-tim','01','1a0IHCdhKxBTK5B7ulvhTt7vjmQIYnkxw','jpg'),
  @('bahcekent-tim','02','1uJzR08s3ICBHVZo2rzN83xfHSiZ3fjLv','jpg'),
  @('bahcekent-tim','03','1zBai9oDBFNN6PLK-HajoC883rvi5caEn','jpg'),
  @('bahcekent-tim','04','1JSLD2wgjSr-tjoItWoDnlCuZ0OSB3JYj','jpg'),
  @('bahcekent-tim','05','1axrLvCg5M3xwWyYnr1-5kjhJE5BlBnJ1','jpg'),
  @('bahcekent-tim','06','1tt8jeWA9DTNiu-jPxyvOsK7qmcp_4wdt','jpg'),
  @('bahcekent-tim','07','1wLRybkQE-0lwCqRyLo4LTcs_uuhuMAFV','jpg')
)
foreach ($it in $items) {
  $dir = Join-Path $Dest $it[0]; New-Item -ItemType Directory -Force $dir | Out-Null
  $out = Join-Path $dir ($it[1] + '.' + $it[3])
  if ((Test-Path $out) -and (Get-Item $out).Length -gt 50000) { "skip $($it[0])/$($it[1])"; continue }
  $url = 'https://drive.usercontent.google.com/download?id=' + $it[2] + '&export=download&confirm=t'
  curl.exe -sSL --retry 3 -o $out $url
  $len = (Get-Item $out).Length
  $head = [Text.Encoding]::ASCII.GetString(([IO.File]::ReadAllBytes($out) | Select-Object -First 15))
  "{0}/{1}.{2}  {3:N0} bytes  head={4}" -f $it[0], $it[1], $it[3], $len, ($head -replace '[^\x20-\x7E]', '.')
}
"DONE"
