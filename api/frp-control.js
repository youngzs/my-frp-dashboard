import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { method, headers, body } = req;
  const frpServerUrl = 'http://your-frp-server-ip:7500'; // 替换为你的FRPS地址和端口

  const response = await fetch(`${frpServerUrl}${req.url}`, {
    method,
    headers,
    body
  });

  const data = await response.text();
  res.status(response.status).send(data);
}
